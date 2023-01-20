import { createRouter, createWebHistory } from 'vue-router'
import Tableau from '@/components/tabs/Tableau.vue'
import Graph from '@/components/charts/Graph.vue'
import About from '@/components/static/About.vue'
import Ios from '@/components/tabs/Ios.vue'
import Tabs from '@/components/tabs/Tabs.vue'


const routes = [
    {path: '/', name: 'Tableau', component: Tabs},
    {path: '/Ios', name: 'Ios', component: Tabs},
    {path: '/charts', name: 'Graph', component: Graph},
    {path: '/filterName/:idName/filterDev/:idDev/', component: Tabs},
    {path: '/filterName/:idName', component: Tableau},
    {path: '/about', name: 'About', component: About},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

//
