<template>
  <v-app>
    <Header/>
    <v-main>
       <!-- <Tableau/> -->
       <div class="container">
        <router-view></router-view>
       </div>  
        
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Tableau from './components/tabs/Tableau.vue'
import Header from './components/static/Header.vue'
import Footer from './components/static/Footer.vue'

export default {
  name: 'App',

  components: {
    Tableau,
    Header,
    Footer
  },
  
}
</script>
