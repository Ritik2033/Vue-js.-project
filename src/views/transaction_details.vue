<template>
    <v-app>
     <div style="height: 10px; position: fixed; width: 100%; z-index: 50;">
         <nav_bar/>
     </div>
     <div>
        <div class="HomeView"><HomeView/></div>
        <div class="Deznaw" ><Deznav/></div>
         <!--<Deznav/>-->
     </div>
    </v-app>
 </template>
   
 <script>
 import nav_bar from './nav_bar.vue';
 //import HomeView from './HomeView.vue';
 import t_h_table from './t_h_table.vue';
 //import HelloWorld from '../components/HelloWorld'
 //import HelloWorld from '@/components/HelloWorld.vue';
 import HomeView from './HomeView.vue';
 //import deznav from './deznav.vue';
import Deznav from './deznav.vue';
 export default {
     name: 'transaction_details',
 
     components: {
    nav_bar,
    HomeView,
    t_h_table,
    HomeView,
    Deznav
},
 }
 </script>
 
 <style scoped>
 .Deznaw{
    margin-left: 15rem !important;
 }

 @media (max-width: 950px){
    .Deznaw{
    margin-left: 0rem !important;
 }
 }
 
 
 
 </style>