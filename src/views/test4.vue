<template>
    <v-app>
     <div style="height: 10px; position: fixed; width: 100%; z-index: 50;">
         <nav_bar @toggle-sidebar="toggleSidebar" />
     </div>
     <div>
         <HomeView :is-sidebar-open="isSidebarOpen"/>
         <div class="t_h_table"><t_h_table/></div>
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
 export default {
     name: 'test4',
 
     components: {
    nav_bar,
    HomeView,
     t_h_table,
     HomeView,
    
 },

 data() {
    return {
      isSidebarOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
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