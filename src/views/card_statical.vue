<template>
    
                    <div class="row" style="width: 100%;">
                        <div class="col-xl-12">
                            <div class="card">
                                <div class="card-header border-0 pb-0">
                                    <div>
                                        <h4 class="fs-20 text-black">Card Statistic</h4>
                                        <span class="fs-12">Lorem ipsum dolor sit amet, consectetur</span>
                                    </div>
                                </div>
                                <div class="card-body pb-2">
                                    <div class="row">
                                        <div class="col-xl-12 col-sm-6" >
                                            <apexchart type="donut" width="200" :options="chartOptions" :series="series" >
                                            </apexchart>
                                        </div>

                                        <div class=" col-xl-12 col-sm-6">
                                            <div class="d-flex flex-wrap text-black fs-12 mt-4">
                                                <span class="me-4 mb-3">
                                                    <svg class="me-2" width="19" height="19" viewBox="0 0 19 19" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="19" height="19" rx="9.5" fill="#1EAAE7" />
                                                    </svg>
                                                    Main Card
                                                </span>
                                                <span class="me-4 mb-3">
                                                    <svg class="me-2" width="19" height="19" viewBox="0 0 19 19" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="19" height="19" rx="9.5" fill="#FF7A30" />
                                                    </svg>
                                                    Orange Card
                                                </span>
                                                <span class="me-4 mb-3">
                                                    <svg class="me-2" width="19" height="19" viewBox="0 0 19 19" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="19" height="19" rx="9.5" fill="#6418C3" />
                                                    </svg>
                                                    Purple Card
                                                </span>
                                                <span class="me-4 mb-3">
                                                    <svg class="me-2" width="19" height="19" viewBox="0 0 19 19" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="19" height="19" rx="9.5" fill="#FFEF5F" />
                                                    </svg>
                                                    Yellow Card
                                                </span>
                                                <span class="me-4 mb-3">
                                                    <svg class="me-2" width="19" height="19" viewBox="0 0 19 19" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="19" height="19" rx="9.5" fill="#2BC155" />
                                                    </svg>
                                                    Green Card
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               
</template>
<script scoped>
//import axios from 'axios';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import VueApexCharts from 'vue-apexcharts';
import card_listVue from './card_list.vue';
export default {
    name: 'test',

    components: {
        apexchart: VueApexCharts,
        card_listVue,
    },

    data: () => {

        return {
            

            series: [44, 55, 41, 17, 15],
            chartOptions: {
                chart: {
                    type: 'donut',
                    width: 120
                },
               labels: ['Main Card', 'Orange Card', 'Purple Card','Yellow Card','Green Card'],
                colors: ['#1EAAE7','#FF4500','#8A2BE2','#FFD700','#2E8B57'],
                legend: {
                    show: false
                },
                plotOptions: {
                    pie: {
                        donut: {
                            size: '65%' // Adjust the size of the donut hole here
                        }
                    }
                },
                dataLabels: {
                    enabled: false, // This will hide the percentage values

                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 100, 
                        },
                     
                    }
                }]
            }
        }
    },

};
</script>