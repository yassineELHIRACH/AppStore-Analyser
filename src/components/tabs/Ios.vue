<template>
  <v-container fluid>
    <div class="tableau">
      <h2 style="text-align:center"> IOS apps</h2>
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
        <th id="searchHios">
          <v-text-field
            id="searchbar"
            clearable
            
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Search by Name"
            v-model="dataStore.chosenName"
          >
          </v-text-field>
        </th>

        <!-- recherche par dev-->
        <!-- <th id="searchHios">
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
        </th> -->

        <!-- recherche par categorie-->
        <th id="searchHios">
          <v-select
            hide-selected
            :items="dataStore.catGorie"
            prepend-inner-icon="mdi-magnify"
            label="Categorie"
            v-model="dataStore.chosenCat"
          ></v-select>
        </th>

        <!-- filtre par date -->
        <th id="datePickerios">
        <Datepicker v-model="dataStore.startDate" :format="format" ></Datepicker>
        <Datepicker v-model="dataStore.endDate" :format="format"></Datepicker>
        </th>
        <!-- 2022-05-22 -->
        <!-- 2017-05-33 -->

        <!-- recherche par version ios-->
        <th id="searchHios">
          <v-select
            hide-selected
            :items="dataStore.versIos"
            prepend-inner-icon="mdi-magnify"
            label="v.ios"
            v-model="dataStore.chosenVa"
          ></v-select>
        </th>

        <!-- recherche par note-->
        <th id="searchHios">
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
        <th id="searchHios">
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
        <!-- <td id="textH">Developpeur</td> -->
        <td id="textH">Categorie</td>
        <td id="textH">Dernière MAJ</td>
        <td id="textH">Version IOS</td>
        <td id="textH">Note</td>
        <td id="textH">Pays</td>
      </tr> 
      <tr v-for="(item, i) in dataStore.filtered" :key="item.Nom + i">

        <td class="appName">
          <button @click="openUrl(item['url Apptica'])">{{ item.Nom }}</button>
        </td>
        <!-- <td>{{ item["Developpeur"] }}</td> -->
        <td>{{ item["Categorie(s)"] }}</td>
        <td>{{ item["Date de mise a jour"] }}</td>
        <td>{{ item["Version Ios"] }}</td>
        <td>{{ item.Note }}</td>
        <td>{{ item.Pays }}</td>
      </tr>
    </tbody>
    <!--</template>-->
  </v-table>
  <v-spacer></v-spacer>
  <p style="margin-top: 5px">
    *{{ dataStore.iosData.length }} apps in total
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

import { useIosstore } from "../../store/iosData";

let urlpath = "";

export default {
  setup() {
    let dataStore = useIosstore();
   
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

#searchHios, #datePickerios {
  background-color: rgb(78, 128, 215);
}


</style>
