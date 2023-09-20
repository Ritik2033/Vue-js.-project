<template>
    <v-app id="invoices">
     <div style="height: 10px; position: fixed; width: 100%; z-index: 50;">
         <nav_bar/>
     </div>
     <div>
         <HomeView/>
        
     </div>
     <div class="invoices">
        <wallet/>
        <transfer/>
        <pay/>
     </div>
    </v-app>
 </template>
   
 <script>
 import nav_bar from './nav_bar.vue';
 //import HomeView from './HomeView.vue';
 //import t_h_table from './t_h_table.vue';
 import invoices from './invoices.vue';
 import payment_his from './payment_his.vue';
 //import HelloWorld from '../components/HelloWorld'
 //import HelloWorld from '@/components/HelloWorld.vue';
 import HomeView from './HomeView.vue';
 import wallet from './wallet.vue';
 import transfer from './transfer.vue';
 import pay from './pay.vue'
 export default {
     name: 'my_wallet',
 
     components: {
    nav_bar,
    HomeView,
    wallet,
    transfer,
    pay
    //invoices,
    //payment_his
     //t_h_table,
     //HomeView,
    
 },
 }
 </script>
 
 <style scoped>
 #invoices{
    background-color:#EFEFEF;
 }
 
 .invoices{
    margin-top: 7rem;
    margin-left: 17rem;
    margin-right: 1rem;
 }

 @media (max-width: 950px){
    .invoices{
    margin-left: 0rem !important;
 }
 }
 </style>