<template>
    <!-- row -->








    <div class="spending" style="padding-left: 1.5rem;">
        <div class="">
            <h4 class="fs-20 text-black mb-4">Spendings</h4>

            <div class="row">
                <div class="a" style="display: flex; flex-direction: row;">
                    <div class="d-flex col-xl-12 col-xxl-6  col-md-12 col-sm-6 mb-4 ">
                        <svg class="me-3" width="14" height="54" viewBox="0 0 14 54" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect x="-6.10352e-05" width="14" height="54" rx="7" fill="#AC39D4" />
                        </svg>
                        <div>
                            <p class="fs-14 mb-2">Investment</p>
                            <span class="fs-18 font-w500"><span class="text-black me-2">$1,415</span>/$2,000</span>
                        </div>
                    </div>
                    <div class="d-flex col-xl-12 col-xxl-6 col-md-12 col-sm-6 mb-4">
                        <svg class="me-3" width="14" height="54" viewBox="0 0 14 54" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect x="-6.10352e-05" width="14" height="54" rx="7" fill="#40D4A8" />
                        </svg>
                        <div>
                            <p class="fs-14 mb-2">Installment</p>
                            <span class="fs-18 font-w500"><span class="text-black me-2">$1,567</span>/$5,000</span>
                        </div>
                    </div>
                </div>
                <div class="b" style="display: flex; flex-direction: row;">
                    <div class="d-flex col-xl-12 col-xxl-6 col-md-12 col-sm-6 mb-4">
                        <svg class="me-3" width="14" height="54" viewBox="0 0 14 54" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect x="-6.10352e-05" width="14" height="54" rx="7" fill="#1EB6E7" />
                        </svg>
                        <div>
                            <p class="fs-14 mb-2">Restaurant</p>
                            <span class="fs-18 font-w500"><span class="text-black me-2">$487</span>/$10,000</span>
                        </div>
                    </div>
                    <div class="d-flex col-xl-12 col-xxl-6 col-md-12 col-sm-6 mb-4">
                        <svg class="me-3" width="14" height="54" viewBox="0 0 14 54" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect x="-6.10352e-05" width="14" height="54" rx="7" fill="#461EE7" />
                        </svg>
                        <div>
                            <p class="fs-14 mb-2">Property</p>
                            <span class="fs-18 font-w500"><span class="text-black me-2">$3,890</span>/$4,000</span>
                        </div>
                    </div>
                </div>

            </div>

        </div>

        <div class="row g-3">
            <div class="col-sm-6 apexchart">
                <div class="bg-secondary rounded text-center p-3" style="background-color:  #AC39D4 !important;">
                    <div class="d-inline-block position-relative donut-chart-sale mb-3">
                        <apexchart type="donut" width="150" :options="chartOptions1" :series="series1">
                        </apexchart>
                        <small class="text-white">71%</small>
                    </div>
                    <span class="fs-14 text-white d-block">Investment</span>
                </div>
            </div>
            <div class="col-sm-6 apexchart">
                <div class="bg-success rounded text-center p-3" style="background-color: #2BC155 !important;">
                    <div class="d-inline-block position-relative donut-chart-sale mb-3">
                        <apexchart type="donut" width="150" :options="chartOptions2" :series="series2">
                        </apexchart>
                        <small class="text-white">30%</small>
                    </div>
                    <span class="fs-14 text-white d-block">Installment</span>
                </div>
            </div>
            <div class="col-sm-6  apexchart">
                <div class="border border-2 border-primary rounded text-center p-3"
                    style="border: 1px solid #1EAAE7 !important  ;">
                    <div class="d-inline-block position-relative donut-chart-sale mb-3">
                        <apexchart type="donut" width="150" :options="chartOptions3" :series="series3">
                        </apexchart>
                        <small class="text-black">5%</small>
                    </div>
                    <span class="fs-14 text-black d-block">Restaurant</span>
                </div>
            </div>
            <div class="col-sm-6 apexchart">
                <div class="bg-info rounded text-center p-3">
                    <div class="d-inline-block position-relative donut-chart-sale mb-3">
                        <apexchart type="donut" width="150" :options="chartOptions" :series="series">
                        </apexchart>
                        <small class="text-white">96%</small>
                    </div>
                    <span class="fs-14 text-white d-block">Property</span>
                </div>
            </div>
        </div>

    </div>
</template>
<script scoped>
import './style.css';
import VueApexCharts from 'vue-apexcharts';
export default {
    name: 'spending',

    components: {
        apexchart: VueApexCharts,

    },

    data: () => {

        return {


            series: [90, 10],
            chartOptions: {
                chart: {
                    type: 'donut',
                    width: 120
                },
                labels: ['Main Card', 'Orange Card', 'Purple Card', 'Yellow Card', 'Green Card'],
                colors: ['#ffffff', '#E0E0E0'],
                legend: {
                    show: false
                },
                plotOptions: {
                    pie: {
                        donut: {
                            size: '75%' // Adjust the size of the donut hole here
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
            },



            series3: [10, 90],
            chartOptions3: {
                chart: {
                    type: 'donut',
                    width: 120
                },
                labels: ['Main Card', 'Orange Card', 'Purple Card', 'Yellow Card', 'Green Card'],
                colors: ['#1EAAE7', '#E0E0E0'],
                legend: {
                    show: false
                },
                plotOptions: {
                    pie: {
                        donut: {
                            size: '75%' // Adjust the size of the donut hole here
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
            },


            series1: [71, 29],
            chartOptions1: {
                chart: {
                    type: 'donut',
                    width: 120
                },
                labels: ['Main Card', 'Orange Card', 'Purple Card', 'Yellow Card', 'Green Card'],
                colors: ['#ffffff', '#E0E0E0'],
                legend: {
                    show: false
                },
                plotOptions: {
                    pie: {
                        donut: {
                            size: '75%' // Adjust the size of the donut hole here
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
            },



            series2: [30, 70],
            chartOptions2: {
                chart: {
                    type: 'donut',
                    width: 120
                },
                labels: ['Main Card', 'Orange Card', 'Purple Card', 'Yellow Card', 'Green Card'],
                colors: ['#ffffff', '#E0E0E0'],
                legend: {
                    show: false
                },
                plotOptions: {
                    pie: {
                        donut: {
                            size: '75%' // Adjust the size of the donut hole here
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
    }
}
</script>

<style scoped>
.apexchart {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: auto;
    height: auto;

}

.spending {
   width: 50%;
   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
@media (max-width: 950px){
    .spending {
   width: 100%;
   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
    
 }
 
</style>