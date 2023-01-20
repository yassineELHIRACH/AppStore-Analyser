<template>
  <div class="graph">
    <BarChart ref="doughnutRef" :chartData="testData" :options="options" />
  </div>
</template>

<script>
import { computed, defineComponent, ref } from "vue";
import { BarChart } from "vue-chart-3";
import { useChartStore } from "../../store/chartData";

export default defineComponent({
  name: "Chart2",
  components: { BarChart },
  props: ['dataleft','string','wichOs', 'labels'],

  created(props) {
    this.filterByOs(props);
  },


  setup(props) {
    let dataStore = props.dataleft;
    let wichOs = props.wichOs;
    let dataChart = useChartStore();
    const doughnutRef = ref();
    let labels = ["1", "2", "3", "4", "5"];

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
          text: "Number of apps per rank ",
        },
      },
    });

    function filterTab(value, nbInstall, string) {
      if(string == "android") {
        const filter = d => d["Note"] == value && d["Nombre installations"] >= nbInstall;
        return filter;
      }
      else if(string != "android") {
        const filter = d => d["Note"] == value;
        return filter; 
      }
    }

    function filterByOs(wichOs) {//construit les parametres pour les graphs
      if( this.wichOs == "android") {
        for (let i = 0; i < 5 ; i++) {
          data.push(dataStore.filter(
              filterTab(labels[i],nbInstall.value,this.wichOs)
            ).length)
        }
      } else {
      for (let i = 0; i < 5 ; i++) {
          data.push(dataStore.filter(
              filterTab(labels[i],nbInstall.value,this.wichOs)
            ).length)
      }
    }
    }

    const testData = computed(() => ({
      labels: labels,
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
          ],
        },
      ],
    }));

    return { testData, options, dataChart, dataStore, doughnutRef, filterByOs, wichOs };
  },
});
</script>
