import { defineStore } from "pinia";


const useChartStore = defineStore("chartData", {
  //id
  state: () => {
    return {
      supInstall: 0,
      currentVers: "All",
      currentVersIos: "All",
      currentVersAndroid: "All",
      versAndroid: ["All","9","8","7","6", "5", "4", "3", "2", "1"],
      versIos: ["All", "15", "14", "13", "12", "11", "10", "9", "8", "7", "6",]
    };
  },

  actions: {},

  getters: {},
});

export { useChartStore };
