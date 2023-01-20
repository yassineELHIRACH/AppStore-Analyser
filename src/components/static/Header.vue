<template>
   <!--  <v-app-bar> -->
    <v-toolbar dense  style="position:fixed, top:0"
         app>
        <v-spacer></v-spacer>
        <v-toolbar-title>
            <div class="Htitle">
                 <router-link to="/" id="slashButton"><v-btn><h3>AppStore Analyser</h3></v-btn></router-link>
            </div>
        </v-toolbar-title>

        <v-spacer></v-spacer>
        
        <v-btn-toggle mandatory id="toggleAndroidIos">
        <router-link to="/" id="slashButton"><v-btn large depressed color="green" @click="update">Android</v-btn></router-link>
        <router-link to="/IOS" id="slashButton"><v-btn large depressed color="blue" @click="update">IOS</v-btn></router-link>
        </v-btn-toggle>
        <v-spacer></v-spacer>

        <v-toolbar-items>
            <!-- <router-link to="/" id="slashButton"><v-btn>Home</v-btn></router-link> -->
            <router-link to="/charts" id="slashButton"><v-btn>Graphs</v-btn></router-link>
            <router-link to="/about" id="slashButton"><v-btn>About</v-btn></router-link>
        </v-toolbar-items>
        <v-spacer>
        </v-spacer>
    </v-toolbar>
    <!-- </v-app-bar> -->
</template>

<script>

export default {
    data() {
    return {
      key: 0,
    };
  },
    methods: {
        update() {
            this.Key++;
        }
    }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,300&display=swap');

#slashButton{
    text-decoration: none;
    color: black;
}

#toggleAndroidIos {
    align-items: center;
    font-family: 'Lato', sans-serif;
}

</style>