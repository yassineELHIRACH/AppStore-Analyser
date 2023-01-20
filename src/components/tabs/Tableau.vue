<template>
  <v-container fluid>
    <div class="tableau">
      <h2 style="text-align:center"> Android apps </h2>
    </div>
  </v-container>
<div class="container">
  <v-table
    fixed-header
    fixed-header-Content
    height="700px"
    loading-text="Loading... Please wait"
    density="comfortable"
  >
    <!--<template v-slot:default> -->
    <thead id="allfilters">
      <tr>
        <!-- recherche par nom-->
        <th id="searchH">
          <v-text-field
            id="searchbar"
            clearable
            
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Search by Name"
            v-model="dataStore.chosenName"
            @change="changeRouteName(dataStore.chosenName)"
          >
          </v-text-field>
        </th>

        <!-- recherche par dev-->
        <th id="searchH">
          <v-text-field
            id="searchbar"
            clearable
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Developpers"
            v-model="dataStore.chosenDev"
            @change="changeRouteDev(dataStore.chosenDev)"
          ></v-text-field>
        </th>

        <!-- recherche par categorie-->
        <th id="searchH">
          <v-select
            hide-selected
            :items="dataStore.catGorie"
            prepend-inner-icon="mdi-magnify"
            label="Categorie"
            v-model="dataStore.chosenCat"
            @change="changeRouteCat(dataStore.chosenCat)"
            v-on:input="changeRouteCat(dataStore.chosenCat)"
            v-on:change="changeRouteCat(dataStore.chosenCat)"
          ></v-select>
        </th>

        <!-- filtre par date -->
        <th id="datePicker">
        <Datepicker v-model="dataStore.startDate" :format="format" ></Datepicker>
        <Datepicker v-model="dataStore.endDate" :format="format"></Datepicker>
        </th>
        <!-- 2022-05-22 -->
        <!-- 2017-05-33 -->

        <!-- recherche par version android-->
        <th id="searchH">
          <v-select
            hide-selected
            :items="dataStore.versAndroid"
            prepend-inner-icon="mdi-magnify"
            label="vAndroid"
            v-model="dataStore.chosenVa"
          ></v-select>
        </th>

        <!-- recherche par note-->
        <th id="searchH">
          <v-btn-toggle mandatory>
            <v-btn large depressed color="blue" @click="dataStore.filterStarUp">
              <v-icon>mdi-arrow-up</v-icon>
            </v-btn>
            <v-btn
              large
              depressed
              color="blue"
              @click="dataStore.filterStarDown"
            >
              <v-icon>mdi-arrow-down</v-icon>
            </v-btn>
          </v-btn-toggle>
        </th>

        <!-- recherche par pays-->
        <th id="searchH">
          <v-select
            hide-selected
            :items="dataStore.dataCountry"
            prepend-inner-icon="mdi-magnify"
            label="Country"
            v-model="dataStore.chosenCountry"
            @change="changeRouteCat(dataStore.chosenCountry)"
            v-on:input="changeRouteCat(dataStore.chosenCountry)"
            v-on:change="changeRouteCat(dataStore.chosenCountry)"
          ></v-select>
        </th>

      </tr>
    </thead>
    <tbody>
      <tr>
        <td id="textH">Nom</td>
        <td id="textH">Developpeur</td>
        <td id="textH">Categorie</td>
        <td id="textH">Dernière MAJ</td>
        <td id="textH">Version Android</td>
        <td id="textH">Note</td>
        <td id="textH">Pays</td>
      </tr> 
      <tr v-for="(item, i) in dataStore.filtered" :key="item.Nom + i">

        <td class="appName">
          <button @click="openUrl(item['url Apptica'])">{{ item.Nom }}</button>
        </td>
        <td>{{ item["Developpeur"] }}</td>
        <td>{{ item["Categorie(s)"] }}</td>
        <td>{{ item["Date de mise a jour"] }}</td>
        <td>{{ item["Version Android"] }}</td>
        <td>{{ item.Note }}</td>
        <td>{{ item.Pays }}</td>
      </tr>
    </tbody>
    <!--</template>-->
  </v-table>
  <v-spacer></v-spacer>
  <p style="margin-top: 5px">
    *{{ dataStore.androidData.length }} apps in total
    <router-link to="/about">(About)</router-link>
  </p>
  </div>
</template>

<!-- <a id="urlnames" style="text-decoration: none; color: black;" href="#" onclick="openUrl(item['url Apptica']);return false;">{{ item.Nom }}</a>
 -->
<script>
function openUrl(url) {
  window.open(url, '_blank');
}

import { useAppstore } from "../../store/appData";

let urlpath = "";

export default {
  setup() {
    let dataStore = useAppstore();

    function typeArray() {
      console.log(typeof dataStore.androidData);
    }
   
     const format = (date) => {
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            return `${day}/${month}/${year}`;
        }
    return {
      dataStore,
      format,
      openUrl,
      typeArray
    };
  },

  data() {
    return {
      range: {
        start: new Date("2017-05-31"),
        end: new Date("2020-05-22"),
      },
      masks: {
        input: "YYYY-MM-DD h:mm A",
      },
    };
  },
  methods: {
    openUrl(url) {
  window.open(url, '_blank');
},
    changeRouteName(a) {
      /* urlpath += "/filterName/" + a;
      this.$router.push({ path: urlpath }); */
    },
    changeRouteDev(a) {
      /* urlpath += "/filterDev/" + a;
      this.$router.push({ path: urlpath }); */
    },

    changeRouteCat(a) {
      /* urlpath += "/filterCat/" + a;
      this.$router.push({ path: urlpath }); */
    },

    changeRouteVa(a) {
      /* urlpath += "/filtervA/" + a;
      this.$router.push({ path: urlpath }); */
    },

    
  },
};
</script>

<style>
.allfilters th {
  padding-left: 0;
}

.dateS {
  display: flex;
  flex-direction: column;
}

.v-text-field .v-input__details {
  display: none;
}

#textH {
  background-color: lavender;
}

#searchH, #datePicker {
  background-color: rgb(40, 193, 43);
}


</style>
