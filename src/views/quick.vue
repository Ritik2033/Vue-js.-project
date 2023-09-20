<template>
    <div class="content-body">
        <!-- row -->
        <div class="container-fluid">
            <div class="form-head mb-4">
                <h2 class="text-black font-w600 mb-0">Dashboard</h2>
            </div>
            <div class="row">
                <div class="col-xl-6">
                    <div class="row">
                        <div class="col-xl-8 col-lg-6 col-md-7 col-sm-8">
                            <div class="card-bx stacked">
                                <img src="./card1.png" alt="" class="mw-100">
                                <div class="card-info text-white">
                                    <p class="mb-1">Main Balance</p>
                                    <h2 class="fs-36 text-white mb-sm-4 mb-3">$673,412.66</h2>
                                    <div class="d-flex align-items-center justify-content-between mb-sm-5 mb-3">
                                        <img src="./dual-dot.png" alt="" class="dot-img">
                                        <h4 class="fs-20 text-white mb-0">**** **** **** 1234</h4>
                                    </div>
                                    <div class="d-flex">
                                        <div class="me-5">
                                            <p class="fs-14 mb-1 op6">VALID THRU</p>
                                            <span>08/21</span>
                                        </div>
                                        <div>
                                            <p class="fs-14 mb-1 op6">CARD HOLDER</p>
                                            <span>Franklin Jr.</span>
                                        </div>
                                    </div>
                                </div>
                                <a href="http://localhost:8080/#/transaction"><v-icon>mdi-chevron-down</v-icon></a>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-5 col-sm-4" >
                            <div class="card bgl-primary card-body overflow-hidden p-0 d-flex rounded"  style="background-color:#F0F8FF !important;">
                                <div class="p-0 text-center mt-3">
                                    <span class="text-black">Limit</span>
                                    <h3 class="text-black fs-20 mb-0 font-w600">$4,000</h3>
                                    <small>/$10,000</small>
                                </div>
                                <img src="../assets/area3.png" alt="" class="mw-100">
                            </div>
                        </div>



                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="row">
                        <div class="col-xl-6 col-sm-6">
                            <div class="card">
                                <div class="card-header flex-wrap border-0 pb-0">
                                    <div class="me-3 mb-2">
                                        <p class="fs-14 mb-1">Income</p>
                                        <span class="fs-24 text-black font-w600">$65,123</span>
                                    </div>
                                    <span class="fs-12 mb-2">
                                        <svg width="21" height="15" viewBox="0 0 21 15" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M0.999939 13.5C1.91791 12.4157 4.89722 9.22772 6.49994 7.5L12.4999 10.5L19.4999 1.5"
                                                stroke="#2BC155" stroke-width="2" />
                                            <path
                                                d="M6.49994 7.5C4.89722 9.22772 1.91791 12.4157 0.999939 13.5H19.4999V1.5L12.4999 10.5L6.49994 7.5Z"
                                                fill="url(#paint0_linear)" />
                                            <defs>
                                                <linearGradient id="paint0_linear" x1="10.2499" y1="3" x2="10.9999"
                                                    y2="13.5" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0" stop-color="#2BC155" stop-opacity="0.73" />
                                                    <stop offset="1" stop-color="#2BC155" stop-opacity="0" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        4% (30 days)</span>
                                </div>
                                <div class="card-body p-0">
                                    <img src="../assets/area2.png" alt="" class="mw-100" style=" width: 100%; height: auto;  display: block;">
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-sm-6">
                            <div class="card">
                                <div class="card-header flex-wrap border-0 pb-0">
                                    <div class="me-3 mb-2">
                                        <p class="fs-14 mb-1">Outome</p>
                                        <span class="fs-24 text-black font-w600">$24,551</span>
                                    </div>
                                    <span class="fs-12 mb-2">
                                        <svg width="21" height="15" viewBox="0 0 21 15" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M14.3514 7.5C15.9974 9.37169 19.0572 12.8253 20 14H1V1L8.18919 10.75L14.3514 7.5Z"
                                                fill="url(#paint0_linear1)" />
                                            <path d="M19.5 13.5C18.582 12.4157 15.6027 9.22772 14 7.5L8 10.5L1 1.5"
                                                stroke="#FF2E2E" stroke-width="2" stroke-linecap="round" />
                                            <defs>
                                                <linearGradient id="paint0_linear1" x1="10.5" y1="2.625" x2="9.64345"
                                                    y2="13.9935" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0" stop-color="#FF2E2E" />
                                                    <stop offset="1" stop-color="#FF2E2E" stop-opacity="0.03" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        4% (30 days)</span>
                                </div>
                                <div class="card-body p-0">
                                    <div id="chart">
                                        <img src="../assets/area2.png" alt="" class="mw-100" style=" width: 100%; height: auto;  display: block;">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-12">
                            <div class="card overflow-hidden">
                                <div class="card-header d-sm-flex d-block border-0 pb-0">
                                    <div class="mb-sm-0 mb-2">
                                        <p class="fs-14 mb-1">Weekly Wallet Usage</p>
                                        <span class="mb-0">
                                            <svg width="12" height="6" viewBox="0 0 12 6" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.9999 6L5.99994 -2.62268e-07L-6.10352e-05 6" fill="#2BC155" />
                                            </svg>
                                            <strong class="fs-24 text-black ms-2 me-3">43%</strong>Than last week</span>
                                    </div>
                                    <span class="fs-12">
                                        <svg width="21" height="15" viewBox="0 0 21 15" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M0.999939 13.5C1.91791 12.4157 4.89722 9.22772 6.49994 7.5L12.4999 10.5L19.4999 1.5"
                                                stroke="#2BC155" stroke-width="2" />
                                            <path
                                                d="M6.49994 7.5C4.89722 9.22772 1.91791 12.4157 0.999939 13.5H19.4999V1.5L12.4999 10.5L6.49994 7.5Z"
                                                fill="url(#paint0_linear2)" />
                                            <defs>
                                                <linearGradient id="paint0_linear2" x1="10.2499" y1="3" x2="10.9999"
                                                    y2="13.5" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0" stop-color="#2BC155" stop-opacity="0.73" />
                                                    <stop offset="1" stop-color="#2BC155" stop-opacity="0" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        4% (30 days)</span>
                                </div>
                                <div class="card-body p-0">
                                    <img src="../assets/area1.png" alt="" class="mw-100" style=" width: 100%; height: auto;  display: block;">
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script scoped>
import './style.css';
import VueApexCharts from 'vue-apexcharts';
export default {
    name: 'quick',

    components: {
        apexchart: VueApexCharts,
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

}
</script>

<style scoped>
@media (max-width: 950px){
    .container-fluid{
    display: flex !important;
    flex-direction: column !important;
 }
 }
</style>