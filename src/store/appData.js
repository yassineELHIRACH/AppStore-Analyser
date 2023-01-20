import { defineStore } from "pinia";

import appjson from "../../public/appAndroid2022-05-20 .json";
import appCategorie from "../../public/categorie.json";
import appCountry from "../../public/pays.json";

const useAppstore = defineStore("androidData", {
  //id
  state: () => {
    return {
      catGorie: appCategorie,
      versAndroid: [
        "All",
        "9",
        "8",
        "7",
        "6",
        "5.1",
        "5",
        "4.4",
        "4.3",
        "4.2",
        "4.1",
        "4",
        "3",
        "2.3",
      ],
      dataCountry: appCountry,
      chosenVa: "All",
      chosenCat: "All",
      chosenCountry: "All",
      chosenName: "",
      chosenDev: "",
      startDate: "2017-05-31",
      endDate: "2022-05-22",
      androidData: appjson,
    };
  },

  actions: {
    filterStarUp() {
      this.androidData.sort(function compare(a, b) {
        if (a["Note"] > b["Note"]) return -1;
        if (
          Number.isNaN(a["Note"]) &&
          a["Note"] < b["Note"] &&
          Number.isNaN(b["Note"])
        )
          return 1;
        // a doit être égal à b
        return 0;
      });
    },

    filterStarDown() {
      this.androidData.sort(function compare(a, b) {
        if (a["Note"] < b["Note"]) return -1;
        if (
          Number.isNaN(a["Note"]) &&
          a["Note"] > b["Note"] &&
          Number.isNaN(b["Note"])
        )
          return 1;
        // a doit être égal à b
        return 0;
      });
    },

    filterByDate() {
      this.androidData.filter(function compare(a) {
        Date.parse(this.startDate + "T00:00:00") <=
          Date.parse(a["Date de mise a jour"]) <=
          Date.parse(this.endDate + "T00:00:00");
      });
    },
  },

  getters: {
    filtered(state) {
      if (
        state.chosenCat == "All" &&
        state.chosenName == "" &&
        state.chosenDev == "" &&
        state.chosenVa == "All" &&
        state.chosenCountry == "All"
      ) {
        return state.androidData.filter(
          (d) =>
            Date.parse(state.startDate) <
              Date.parse(
                d["Date de mise a jour"] +
                  " 02:00:00 GMT+0200 (heure d’été d’Europe centrale)"
              ) &&
            Date.parse(
              d["Date de mise a jour"] +
                " 02:00:00 GMT+0200 (heure d’été d’Europe centrale)"
            ) < Date.parse(state.endDate)
        );
      } else if (
        state.chosenCat == "All" &&
        state.chosenName != "" &&
        state.chosenDev == "" &&
        state.chosenCountry == "All" &&
        state.chosenVa == "All"
      ) {
        return state.androidData.filter(
          (d) =>
            d.Nom.toLowerCase().includes(state.chosenName.toLowerCase()) &&
            Date.parse(state.startDate) <
              Date.parse(
                d["Date de mise a jour"] +
                  " 02:00:00 GMT+0200 (heure d’été d’Europe centrale)"
              ) &&
            Date.parse(
              d["Date de mise a jour"] +
                " 02:00:00 GMT+0200 (heure d’été d’Europe centrale)"
            ) < Date.parse(state.endDate)
        );
      } else if (
        state.chosenCat == "All" &&
        state.chosenName != "" &&
        state.chosenDev == "" &&
        state.chosenCountry != "All"
      ) {
        return state.androidData.filter(
          (d) =>
            d.Nom.toLowerCase().includes(state.chosenName.toLowerCase()) &&
            d["Pays"] == state.chosenCountry &&
            Date.parse(state.startDate) <
              Date.parse(
                d["Date de mise a jour"] +
                  " 02:00:00 GMT+0200 (heure d’été d’Europe centrale)"
              ) &&
            Date.parse(
              d["Date de mise a jour"] +
                " 02:00:00 GMT+0200 (heure d’été d’Europe centrale)"
            ) < Date.parse(state.endDate)
        );
      } else if (
        state.chosenName == "" &&
        state.chosenDev != "" &&
        state.chosenCountry == "All"
      ) {
        //TODO1
        return state.androidData.filter(
          (d) =>
            d["Developpeur"].toLowerCase().includes(state.chosenDev) &&
            Date.parse(state.startDate) <
              Date.parse(
                d["Date de mise a jour"] +
                  " 02:00:00 GMT+0200 (heure d’été d’Europe centrale)"
              ) &&
            Date.parse(
              d["Date de mise a jour"] +
                " 02:00:00 GMT+0200 (heure d’été d’Europe centrale)"
            ) < Date.parse(state.endDate)
        );
      } else if (
        state.chosenName != "" &&
        state.chosenDev != "" &&
        state.chosenCountry == "All"
      ) {
        //TODO1
        return state.androidData.filter(
          (d) =>
            d["Developpeur"].toLowerCase().includes(state.chosenDev) &&
            d.Nom.toLowerCase().includes(state.chosenName) &&
            Date.parse(state.startDate) <
              Date.parse(
                d["Date de mise a jour"] +
                  " 02:00:00 GMT+0200 (heure d’été d’Europe centrale)"
              ) &&
            Date.parse(
              d["Date de mise a jour"] +
                " 02:00:00 GMT+0200 (heure d’été d’Europe centrale)"
            ) < Date.parse(state.endDate)
        );
      } else if (
        state.chosenName != "" &&
        state.chosenDev != "" &&
        state.chosenCountry != "All"
      ) {
        //TODO2
        return state.androidData.filter(
          (d) =>
            d["Developpeur"].toLowerCase().includes(state.chosenDev) &&
            d.Nom.toLowerCase().includes(state.chosenName) &&
            d["Pays"] == state.chosenCountry &&
            Date.parse(state.startDate) <
              Date.parse(
                d["Date de mise a jour"] +
                  " 02:00:00 GMT+0200 (heure d’été d’Europe centrale)"
              ) &&
            Date.parse(
              d["Date de mise a jour"] +
                " 02:00:00 GMT+0200 (heure d’été d’Europe centrale)"
            ) < Date.parse(state.endDate)
        );
      } else if (
        state.chosenCat == "All" &&
        state.chosenName != "" &&
        state.chosenDev != "" &&
        state.chosenCountry == "All"
      ) {
        //state.chosenName = "";
        return state.androidData.filter((d) =>
          d.Nom.toLowerCase().includes(
            state.chosenName.toLowerCase() &&
              d["Developpeur"].toLowerCase().includes(state.chosenDev) &&
              Date.parse(state.startDate) <
                Date.parse(
                  d["Date de mise a jour"] +
                    " 02:00:00 GMT+0200 (heure d’été d’Europe centrale)"
                ) &&
              Date.parse(
                d["Date de mise a jour"] +
                  " 02:00:00 GMT+0200 (heure d’été d’Europe centrale)"
              ) < Date.parse(state.endDate)
          )
        );
      } else if (
        state.chosenCat == "All" &&
        state.chosenDev != "" &&
        state.chosenName != "" &&
        state.chosenCountry != "All"
      ) {
        return state.androidData.filter(
          (d) =>
            d["Developpeur"].toLowerCase() == state.chosenDev.toLowerCase() &&
            d.Nom.toLowerCase().includes(state.chosenName.toLowerCase()) &&
            d["Pays"] == state.chosenCountry &&
            Date.parse(state.startDate) <
              Date.parse(
                d["Date de mise a jour"] +
                  " 02:00:00 GMT+0200 (heure d’été d’Europe centrale)"
              ) &&
            Date.parse(
              d["Date de mise a jour"] +
                " 02:00:00 GMT+0200 (heure d’été d’Europe centrale)"
            ) < Date.parse(state.endDate)
        );
      } else if (
        state.chosenCat != "All" &&
        state.chosenVa == "All" &&
        state.chosenCountry == "All"
      ) {
        if (state.chosenName == "") {
          return state.androidData.filter(
            (d) =>
              d["Categorie(s)"].toLowerCase() ==
                state.chosenCat.toLowerCase() &&
              Date.parse(state.startDate) <
                Date.parse(
                  d["Date de mise a jour"] +
                    " 02:00:00 GMT+0200 (heure d’été d’Europe centrale)"
                ) &&
              Date.parse(
                d["Date de mise a jour"] +
                  " 02:00:00 GMT+0200 (heure d’été d’Europe centrale)"
              ) < Date.parse(state.endDate)
          );
        } else {
          return state.androidData.filter(
            (d) =>
              d.Nom.toLowerCase().includes(state.chosenName.toLowerCase()) &&
              d["Categorie(s)"].toLowerCase() ==
                state.chosenCat.toLowerCase() &&
              Date.parse(state.startDate) <
                Date.parse(
                  d["Date de mise a jour"] +
                    " 02:00:00 GMT+0200 (heure d’été d’Europe centrale)"
                ) &&
              Date.parse(
                d["Date de mise a jour"] +
                  " 02:00:00 GMT+0200 (heure d’été d’Europe centrale)"
              ) < Date.parse(state.endDate)
          );
        }
      } else if (
        state.chosenCat != "All" &&
        state.chosenVa == "All" &&
        state.chosenCountry != "All"
      ) {
        if (state.chosenName == "") {
          return state.androidData.filter(
            (d) =>
              d["Pays"] == state.chosenCountry &&
              d["Categorie(s)"].toLowerCase() ==
                state.chosenCat.toLowerCase() &&
              Date.parse(state.startDate) <
                Date.parse(
                  d["Date de mise a jour"] +
                    " 02:00:00 GMT+0200 (heure d’été d’Europe centrale)"
                ) &&
              Date.parse(
                d["Date de mise a jour"] +
                  " 02:00:00 GMT+0200 (heure d’été d’Europe centrale)"
              ) < Date.parse(state.endDate)
          );
        } else {
          return state.androidData.filter(
            (d) =>
              d["Pays"] == state.chosenCountry &&
              d.Nom.toLowerCase().includes(state.chosenName.toLowerCase()) &&
              d["Categorie(s)"].toLowerCase() ==
                state.chosenCat.toLowerCase() &&
              Date.parse(state.startDate) <
                Date.parse(
                  d["Date de mise a jour"] +
                    " 02:00:00 GMT+0200 (heure d’été d’Europe centrale)"
                ) &&
              Date.parse(
                d["Date de mise a jour"] +
                  " 02:00:00 GMT+0200 (heure d’été d’Europe centrale)"
              ) < Date.parse(state.endDate)
          );
        }
      } else if (
        state.chosenVa != "All" &&
        state.chosenCat == "All" &&
        state.chosenCountry == "All"
      ) {
        return state.androidData.filter(
          (d) =>
            d["Version Android"] == state.chosenVa &&
            Date.parse(state.startDate) <
              Date.parse(
                d["Date de mise a jour"] +
                  " 02:00:00 GMT+0200 (heure d’été d’Europe centrale)"
              ) &&
            Date.parse(
              d["Date de mise a jour"] +
                " 02:00:00 GMT+0200 (heure d’été d’Europe centrale)"
            ) < Date.parse(state.endDate)
        );
      } else if (
        state.chosenVa != "All" &&
        state.chosenCat == "All" &&
        state.chosenCountry == "All"
      ) {
        return state.androidData.filter(
          (d) =>
            d["Version Android"] == state.chosenVa &&
            Date.parse(state.startDate) <
              Date.parse(
                d["Date de mise a jour"] +
                  " 02:00:00 GMT+0200 (heure d’été d’Europe centrale)"
              ) &&
            Date.parse(
              d["Date de mise a jour"] +
                " 02:00:00 GMT+0200 (heure d’été d’Europe centrale)"
            ) < Date.parse(state.endDate)
        );
      } else if (
        state.chosenVa != "All" &&
        state.chosenCat == "All" &&
        state.chosenCountry != "All"
      ) {
        //TODO 3
        return state.androidData.filter(
          (d) =>
            d["Version Android"] == state.chosenVa &&
            d["Pays"] == state.chosenCountry &&
            Date.parse(state.startDate) <
              Date.parse(
                d["Date de mise a jour"] +
                  " 02:00:00 GMT+0200 (heure d’été d’Europe centrale)"
              ) &&
            Date.parse(
              d["Date de mise a jour"] +
                " 02:00:00 GMT+0200 (heure d’été d’Europe centrale)"
            ) < Date.parse(state.endDate)
        );
      } else if (
        state.chosenVa != "All" &&
        state.chosenCat != "All" &&
        state.chosenCountry != "All"
      ) {
        return state.androidData.filter(
          (d) =>
            d["Pays"] == state.chosenCountry &&
            d["Version Android"] == state.chosenVa &&
            d["Categorie(s)"].toLowerCase() == state.chosenCat.toLowerCase() &&
            Date.parse(state.startDate) <
              Date.parse(
                d["Date de mise a jour"] +
                  " 02:00:00 GMT+0200 (heure d’été d’Europe centrale)"
              ) &&
            Date.parse(
              d["Date de mise a jour"] +
                " 02:00:00 GMT+0200 (heure d’été d’Europe centrale)"
            ) < Date.parse(state.endDate)
        );
      } else if (state.chosenCountry != "All") {
        return state.androidData.filter(
          (d) =>
            d["Pays"] == state.chosenCountry &&
            Date.parse(state.startDate) <
              Date.parse(
                d["Date de mise a jour"] +
                  " 02:00:00 GMT+0200 (heure d’été d’Europe centrale)"
              ) &&
            Date.parse(
              d["Date de mise a jour"] +
                " 02:00:00 GMT+0200 (heure d’été d’Europe centrale)"
            ) < Date.parse(state.endDate)
        );
      }
    },
  },
});

export { useAppstore };
