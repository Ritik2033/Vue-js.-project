<template>
    <v-app style="background-color: #EFEFEF;">
        <div style="height: 10px; position: fixed; width: 100%; z-index: 50;">
            <nav_bar />
        </div>
        <div>
            <HomeView />

        </div>
        <div class="quick" style="margin-top: 5rem;">
            <quick />
           
        </div>

       <div class="A" >
            <overview />
           <spending />
        </div>
      
        <div class="A" >
            <quick_transfer />
        -<test2 />
        </div>
           
        <div class="footer">
            <div class="copyright">
                <p>Copyright © Designed &amp; Developed by <a href="http://dexignzone.com/" target="_blank">DexignZone</a>
                    2023</p>
            </div>
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
import quick from './quick.vue';
import overview from './overview.vue';
import spending from './spending.vue';
import quick_transfer from './quick_transfer.vue';
import test2 from './test2.vue';
export default {
    name: 'dashboard',

    components: {
        nav_bar,
        HomeView,
        //t_h_table,
        quick,
        overview,
        spending,
        quick_transfer,
        test2,


    },
}
</script>
 
<style scoped>
.quick{
    margin-left: 15rem;
}
@media (max-width: 950px){
    .quick{
    margin-left: 0rem !important;
 }

 
 }

 .A{
    margin-top: 2rem;
    margin-left: 17rem !important;
    margin-right: 2rem !important;
    display: flex; 
    flex-direction: row; 
    gap:1.0rem
 }
 @media (max-width: 950px){
    .A{
    margin-left: 1rem !important;
    display: flex; 
    flex-direction: column; 
    margin-right: 1rem !important;
    
 }
 }
 
</style>