<template>
  <div class="graph">
    <LineChart ref="lineRef" :chartData="testData" :options="options" />
  </div>
</template>

<script>
import { computed, defineComponent, ref } from "vue";
import { LineChart } from "vue-chart-3";
import { useAppstore } from "../../store/appData";
import { useChartStore } from "../../store/chartData";
import { useIosstore } from "../../store/iosData";

export default defineComponent({
  name: "Home",
  components: { LineChart },
  props: ['dataleft','wichOs', 'items'],

  setup(props) {
    const wichOs = props.wichOs;
    let dataStore = useAppstore();
    let dataprops = props.dataleft;
    let dataChart = useChartStore();
    const lineRef = ref();
    const nbInstall = ref([dataChart.supInstall]);
    let monthTab = [1,2,3,4];
    const varone = 1;

    const options = ref({
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Most recents updates (2022)",
        },
      },
    });

    function getMonth(date) {
      const dateMonth = new Date(date);
      return dateMonth.getUTCMonth() + 1;
    }

    function getYear(date) {
      const dateYear = new Date(date);
      return dateYear.getUTCFullYear();
    }

    function filterTab(monthV) {
        const allfilter1 = d => getMonth(d["Date de mise a jour"]) == monthV &&
        getYear(d["Date de mise a jour"]) == 2022  && d["Nombre installations"] >= nbInstall.value;
         return allfilter1;
    }
    function filterIos(monthV) {
        const allfilter1 = d => getMonth(d["Date de mise a jour"]) == monthV &&
        getYear(d["Date de mise a jour"]) == 2022 ;
         return allfilter1;
    }

    function filterByOs(wichOs) {//construit les parametres pour les graphs
     let data = [];
      if( wichOs == "android") {
         data.push(dataprops.filter(
             filterTab(monthTab[0])
            ).length);
           data.push(dataprops.filter(
            filterTab(monthTab[1])
            ).length);
            data.push(dataprops.filter(
            filterTab(monthTab[2])
            ).length);
            data.push(dataprops.filter(
           filterTab(monthTab[3])
            ).length);
            return data;
         } 
         else if(wichOs == "ios") {
          data.push(dataprops.filter(
            filterIos(monthTab[0])
          ).length);
          data.push(dataprops.filter(
            filterIos(monthTab[1])
          ).length);
          data.push(dataprops.filter(
            filterIos(monthTab[2])
          ).length);
          data.push(dataprops.filter(
            filterIos(monthTab[3])
          ).length);
      return data;
    }
    }

    const testData = computed(() => ({
      labels: ["january, 2022", "february, 2022", "march, 2022", "april, 2022"],
      datasets: [
        {
          label: ["Number of apps"],
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
      console.log(nbInstall.value);
      console.log(dataChart.supInstall);
    }

    return {
      testData,
      options,
      dataChart,
      dataStore,
      shuffleData,
      lineRef,
    };
  },
});
</script>
