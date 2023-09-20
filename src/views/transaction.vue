<template>
    <v-app>
     <div style="height: 10px; position: fixed; width: 100%; z-index: 50;">
         <nav_bar/>
     </div>
     <div>
         <HomeView/>
         <div class="t_h_table"><card/></div>
     </div>
    </v-app>
 </template>
   
 <script>
 import nav_bar from './nav_bar.vue';
 //import HomeView from './HomeView.vue';
 //import t_h_table from './t_h_table.vue';
 //import HelloWorld from '../components/HelloWorld'
 //import HelloWorld from '@/components/HelloWorld.vue';
 import HomeView from './HomeView.vue';
 import card from './card.vue';
 export default {
     name: 'transaction',
 
     components: {
    nav_bar,
    HomeView,
    card,
     //t_h_table,
    // HomeView,
    
 },
 }
 </script>

 <style scoped>

.t_h_table{
    margin-left: 15rem !important;
}



 @media (max-width: 950px){
    .t_h_table{
    margin-left: 0rem !important;
 }
 }
</style>