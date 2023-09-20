<template>
    <div style="background-color: #fdfdfd;">
        <div style="position: fixed; width: 100%; z-index: 50;">
            <AboutView />
        </div>
        <div>
            <HomeView/>
            <t_h_table />
        </div>
    </div>
</template>
  
<script>
import AboutView from './AboutView.vue';
import t_h_table from './t_h_table.vue';
//import HelloWorld from '../components/HelloWorld'
//import HelloWorld from '@/components/HelloWorld.vue';
import HomeView from './HomeView.vue';
export default {
    name: 'merphy',

    components: {
    AboutView,
    t_h_table,
    HomeView,
   
},
}
</script>

<style>

.v-application--wrap {
    flex: 1 1 auto;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    min-height: 1vh !important;
    position: relative;
}


</style>