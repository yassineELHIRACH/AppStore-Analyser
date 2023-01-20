<template>
  <v-footer id="myFooter" inset app  width="auto" >
    <v-card
      elevation="0"
      rounded="15"
      width="100%"
      class="bg-grey text-center"
      bottom="0"
      position="fixed"
    >
      <!-- <v-card-text>
        <router-link to="/" id="slashButton">
        <v-btn
          class="mx-4"
          icon="mdi-table-search"
          variant="plain"
          title="table"
        ></v-btn>
        </router-link>
        <router-link to="/charts" id="slashButton">
        <v-btn
          class="mx-4"
          icon="mdi-chart-line"
          variant="plain"
          title="graph"
        ></v-btn>
        </router-link>

        <router-link to="/contact" id="slashButton">
        <v-btn
          class="mx-4"
          icon="mdi-information-outline"
          variant="plain"
          title="contact"
        ></v-btn>
        </router-link>
      </v-card-text> -->

      <v-divider></v-divider>

      <v-card-text class="text-white">
         <strong>POM project - Par EL HIRACH YASSINE</strong> — <!--{{ new Date().getFullYear() }}-->2022 —
         Made with <a href="https://vuejs.org/" target="_blank" style="text-decoration: none; color: white"><v-icon id="vuejsCon" title="vuejs"> mdi-vuejs</v-icon> </a> & <a href="https://next.vuetifyjs.com/en/" target="_blank" style="text-decoration: none; color: white"><v-icon id="vuetifyCon" title="vuetify">mdi-vuetify</v-icon></a>
      </v-card-text>
    </v-card>
  </v-footer>
</template>