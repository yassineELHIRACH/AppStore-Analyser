<template>
  <div class="graph">
    <BarChart ref="doughnutRef" :chartData="testData" :options="options" />
  </div>
</template>

<script>
import { computed, defineComponent, ref } from "vue";
import { BarChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
import { useChartStore } from "../../store/chartData";

Chart.register(...registerables);

export default defineComponent({
  name: "Chart1",
  components: { BarChart },
  props: ['dataleft','string','wichOs', 'labels'],

  created(props) {
    this.filterByOs(props);
  },

  setup(props) {
    /* let dataStore = useAppstore(); */
    let dataStore = props.dataleft;
    let stringOS = props.string;
    let wichOs = props.wichOs;
    let dataChart = useChartStore();
    const doughnutRef = ref();

    const tabAndroidVers = [2.3,3,4,4.1,4.2,4.3,4.4,5,5.1,6,7,8,9];
    const tabiosVers = ["6","7","8","9","10","11","12","13","14","15"];

    let data = [];

    const nbInstall = ref([dataChart.supInstall]);

    const options = ref({
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Number of apps per version ",
        },
      },
    });


    function filterTab(value, nbInstall, string) {
      if(string == "Version Android") {
        const filter = d => d[string] == value && d["Nombre installations"] >= nbInstall;
        return filter;
      }
      else if(string != "Version Android") {
        const filter = d => d[string] == value;
        return filter; 
      }
    }

    function filterByOs(wichOs) {//construit les parametres pour les graphs
      if( this.wichOs == "android") {
        for (let i = 0; i < tabAndroidVers.length ; i++) {
          data.push(dataStore.filter(
              filterTab(tabAndroidVers[i],nbInstall.value,stringOS)
            ).length)
        }
      } else {
      for (let i = 0; i < tabiosVers.length ; i++) {
          data.push(dataStore.filter(
              filterTab(tabiosVers[i],nbInstall.value,stringOS)
            ).length)
      }
    }
    }

    const testData = computed(() => ({
      labels: props.labels,
      datasets: [
        {
          label: "",
          data: data,
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

    return { testData, options, dataChart, dataStore, doughnutRef, filterByOs, wichOs };
  },

});
</script>
