<template>
    <!-- row -->
    <div class="car">
        <div class="overview" style="padding-left: 1.5rem;">
            <div class="card-header d-sm-flex d-block border-0 pb-0 flex-wrap">
                <div class="pr-3 me-auto mb-sm-0 mb-3">
                    <h4 class="fs-20 text-black mb-1">Transaction Overview</h4>
                    <span class="fs-12">Lorem ipsum dolor sit amet, consectetur</span>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                    <a href="javascript:void(0)" class="btn btn-rounded btn-light me-3" data-bs-toggle="modal"
                        data-bs-target="#DownloadReport" style="background-color: #E0E0E0;"><i
                            class="las la-download text-primary scale5 me-3" style="background-color: #E0E0E0;"></i>Download
                        Report</a>
                    <!-- Modal -->
                    <div class="modal fade" id="DownloadReport">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Modal title</h5>
                                    <button type="button" class="close" data-bs-dismiss="modal"><span>&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo
                                        odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                                        risus, porta ac consectetur ac, vestibulum at eros.</p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger light"
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="dropdown c-pointer">
                        <div class="btn-link" data-bs-toggle="dropdown">
                            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <rect x="0" y="0" width="24" height="24"></rect>
                                    <circle fill="#000000" cx="5" cy="12" r="2"></circle>
                                    <circle fill="#000000" cx="12" cy="12" r="2"></circle>
                                    <circle fill="#000000" cx="19" cy="12" r="2"></circle>
                                </g>
                            </svg>
                        </div>
                        <div class="dropdown-menu dropdown-menu-end">
                            <a class="dropdown-item" href="javascript:void(0)">Delete</a>
                            <a class="dropdown-item" href="javascript:void(0)">Edit</a>
                        </div>
                    </div>

                </div>
            </div>
            <div id="chart">
                <apexchart type="bar" height="350" :options="chartOptions" :series="series">
                </apexchart>
            </div>
            <div class="card-body">
                <div id="chartBar"></div>
                <div class="d-flex">
                    <div class="form-check custom-switch toggle-switch text-end me-4">
                        <input type="checkbox" class="form-check-input mt-0" id="customSwitch11">
                        <label class="form-check-label fs-14 text-black pe-2" for="customSwitch11">Number</label>
                    </div>
                    <div class="form-check custom-switch toggle-switch text-end me-4">
                        <input type="checkbox" class="form-check-input mt-0" id="customSwitch12">
                        <label class="form-check-label fs-14 text-black pe-2" for="customSwitch12">Analytics</label>
                    </div>
                </div>
            </div>

        </div>
       
        
    

        
    </div>
</template>
<script>
import VueApexCharts from 'vue-apexcharts';
import spending from './spending.vue';
import test2 from './test2.vue';
export default {
    name: 'overview',

    components: {
        apexchart: VueApexCharts,
        spending,
        test2,

    },

    data: () => {
        return {
            series: [{
                name: false,

                data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
            }, {
                name: 'Revenue',
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
            },],
            chartOptions: {
                chart: {
                    type: 'bar',
                    height: 350
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '55%',
                        endingShape: 'circle'
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                xaxis: {
                    categories: ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'fri', 'sat'],
                },
                yaxis: {
                    title: {

                    }
                },

                dataLabels: {
                    enabled: false,
                },
                colors: ['#9E9E9E', '#E0E0E0',],
                fill: {
                    opacity: 1
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return "$ " + val + " thousands"
                        }
                    }
                }
            }
        }
    }



}
</script>
<style scoped>

#card{
    width: 100%; 
    height: auto; 
    display: block;
}
.overview {
    

}
.car{
   width: 50%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
   
}
@media (max-width: 950px){
    .car {
   width: 100%;
   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
    
 }

</style>