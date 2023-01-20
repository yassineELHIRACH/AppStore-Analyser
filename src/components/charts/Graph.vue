<template>
  <v-app>
    <div class="container">
      

      <div class="allApps">
        <div class="chartsAndroid">
          <h1 style="text-align: center; color: #17cf17;">Android</h1>
              <ChartOne :key="key" :dataleft="androidtab" :string="androidString" :wichOs="android" :labels="labelsAndroid" :items="itemsAndroid"/>
              <ChartTwo :key="key" :dataleft="androidtab" :string="androidString" :wichOs="android" :labels="labelsAndroid" :items="itemsAndroid"/>
              <ChartThree :key="key" :dataleft="androidtab" :string="androidString" :wichOs="android" :labels="labelsAndroid" :items="itemsAndroid"/>
              <ChartFor :key="key" :dataleft="androidtab" :string="androidString" :wichOs="android" :labels="labelsAndroid" :items="itemsAndroid"/>
              <div class="graph" id="buttonConfirm1" style="display: grid">
        <button id="boutonReloa" @click="update" class="myButton">
          {{ nomBouton || "See Android apps with 100M installations" }}
        </button>
      </div>
        </div>

        <span class="vertical"></span> 

        <div class="chartsIos">
          <h1 style="text-align: center; color: rgb(78, 128, 215);">Ios</h1>
              <ChartOne :key="key" :dataleft="iostab" :string="iosString" :wichOs="ios" :labels="labelsIos" :items="itemsIos"/>
              <ChartTwo :key="key" :dataleft="iostab" :string="iosString" :wichOs="ios" :labels="labelsIos" :items="itemsIos" />
              <ChartThree :key="key" :dataleft="iostab" :string="iosString" :wichOs="ios" :labels="labelsIos" :items="itemsIos"/>
              <ChartFor :key="key" :dataleft="iostab" :string="iosString" :wichOs="ios" :labels="labelsIos" :items="itemsIos" />
        </div>
      </div>

    </div>
  </v-app>
</template>

<script>
import ChartOne from "./ChartOne.vue";
import ChartTwo from "./ChartTwo.vue";
import ChartThree from "./ChartThree.vue";
import ChartFor from "./ChartFor.vue";
import { useChartStore } from "../../store/chartData";
import { useAppstore } from "../../store/appData";
import { useIosstore } from "../../store/iosData";

export default {
  name: "Graph",
  components: {
    ChartOne,
    ChartTwo,
    ChartThree,
    ChartFor,
  },

  data() {
    let chartData = useChartStore();

    let androidataStore = useAppstore();
    let androidtab = androidataStore.androidData;

    let iosdataStore = useIosstore();
    let iostab = iosdataStore.iosData;


    let iosString = "Version Ios";
    let androidString = "Version Android";

    let android = "android";
    let ios = "ios";

    //data et labels pour les charts

    //chartOne
    let labelsAndroid = ["v.2.3","v.3","v.4","v.4.1","v.4.2","v.4.3","v.4.4","v.5","v.5.1","v.6","v.7","v.8","v.9"];
    let labelsIos = ["v.6","v.7","v.8","v.9","v.10","v.11","v.12","v.13","v.14","v.15"];

    let itemsAndroid = chartData.versAndroid;
    let itemsIos = chartData.versIos;

    /* let dataSle = chartData.currentVers; */

    return {
      key: 0,
      chartData,
      androidtab,
      iostab,
      iosString,
      androidString,
      android,
      ios,
      labelsAndroid,
      labelsIos,
      itemsAndroid,
      itemsIos,
    };
  },
 
  methods: {
    update(name) {
      if (this.chartData.supInstall == 100000000) {
        this.nomBouton = "See apps with more than 100M installations";
        this.chartData.supInstall = 0;
      } else {
        this.nomBouton = "See all apps";
        this.chartData.supInstall = 100000000;
      }
      this.key++;
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>
