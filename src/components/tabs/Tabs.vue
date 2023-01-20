<template>
    <v-app>
        <div class="container">
          
          <Tableau :key="key" v-if="isAndroid()"/>
          <IOS :key="key" v-if="isIOS()"/>
        </div>
    </v-app>
</template>

<script>
import Tableau from "./Tableau.vue"
import IOS from "./Ios.vue"
import Key from "../static/Header.vue"

export default {
    name: "Tabs",
    components: {
        Tableau,
        IOS,
    },

    data() {
    return {
      key: Key,
    };
  },

  methods: {
    isAndroid() {
        if(this.$route.path == "/" ) {
          return true
        } else {
          return false
        }
  },

  isIOS() {
        if(this.$route.path == "/IOS") {
          return true
        } else {
          return false
        }
  },
  }

  

}
</script>