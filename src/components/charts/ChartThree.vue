<template>
  <div class="graph">
    <BarChart ref="doughnutRef" :chartData="testData" :options="options" />
    <div class="confirmData3">
      <div class="child">
        <v-select hide-selected :items="items" prepend-inner-icon="mdi-magnify" label="Current version"
          v-model="datav"  @change="shuffleData"
          ></v-select>
      </div>

    </div>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from "vue";
import { BarChart } from "vue-chart-3";
import { useChartStore } from "../../store/chartData";
import filterTab from "../../../public/filtreChartThree";

export default defineComponent({
  name: "Chart3",
  components: { BarChart },
  props: ['dataleft','wichOs', 'items'],

  setup(props) {
    let dataStore = props.dataleft;
    let items = props.items;
    let dataChart = useChartStore();
    const datav = ref([dataChart.currentVers]);
    const doughnutRef = ref();
    const nbInstall = ref([dataChart.supInstall]);
    const wichOs = props.wichOs;

    function getLabels(wichOs) {
      if (wichOs == "android") {
        return ["Game", "Application", "Family"];
      }
      else if (wichOs == "ios") {
        return ["Kids", "Games", "Application"];
      }
    }

    const labelsA = getLabels(wichOs);

    const options = ref({
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Number of apps in each categorie per OS version ",
        },
      },
    });

    function filterIos(value, valCat) {
      if(value == "All" ) {
        const allfilter1 = d => d["Categorie Principale Apptica"] == valCat;
         return allfilter1;
      } else {
        const allfilter2 = d => Math.floor(d["Version Ios"]) == value &&
        d["Categorie Principale Apptica"] == valCat;
        return allfilter2;
      }
    }

    function filterByOs(wichOs) {//construit les parametres pour les graphs
     let data = [];
      if( wichOs == "android") {
       /*  for (let i = 0; i < labels.length ; i++) { */
          data.push(dataStore.filter(
              filterTab(datav.value,"Game",nbInstall.value)
            ).length);
            data.push(dataStore.filter(
              filterTab(datav.value,"Application",nbInstall.value)
            ).length);
            data.push(dataStore.filter(
              filterTab(datav.value,"Family",nbInstall.value)
            ).length);
        //}
        return data;
      } else if(wichOs == "ios") {
          data.push(dataStore.filter(
              filterIos(datav.value,"Kids")
            ).length);
            data.push(dataStore.filter(
              filterIos(datav.value,"Games")
            ).length);
            data.push(dataStore.filter(
              filterIos(datav.value,"")
            ).length);
      return data;
    }
    }

    const testData = computed(() => ({
      labels: labelsA,
      datasets: [
        {
          label: '',
          data: filterByOs(wichOs),
          backgroundColor: [
            "#77CEFF",
            "#0079AF",
            "#123E6B",
            "#97B0C4",
            "#A5C8ED",
            "#E6B241",
            "#FF6BAA",
            "#7B6CCA",
            "#1B124D",
            "#DB6BFF",
          ],
        },
      ],
    }));

    function shuffleData() {
      datav.value = dataChart.currentVers;
    }

    return {
      testData,
      shuffleData,
      doughnutRef,
      options,
      dataChart,
      dataStore,
      datav,
      items
    };
  },
});
</script>
