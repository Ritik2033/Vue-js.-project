<template>
    <v-app>
  
            <div class="d-sm-flex d-block justify-content-between align-items-center mb-4">
                <h2 class="text-black font-w600 mb-sm-0 mb-2">Cards Center</h2>

                <v-btn icon class="text-primary" style="border-color: var(--primary-hover);background-color: var(--primary-hover);
                  color: #fff !important; width: 9rem; height: 2.5rem; border-radius: 10px">
                    <v-icon left>mdi-plus</v-icon>
                    New card
                </v-btn>
                <!-- Modal -->
                <div class="modal fade" id="examplenewcard">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Modal title</h5>
                                <button type="button" class="close" data-bs-dismiss="modal"><span>&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                    in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger light" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12">
                    <div class="cards owl-carousel mb-sm-3 mb-3"
                        style="display: flex; flex-direction: row; overflow: scroll;">
                        <div class="items" style="margin-left: 20px;">
                            <div class="card-bx mb-0">
                                <img src="./card1.png" alt="">
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
                            </div>
                        </div>
                        <div class="items" style="margin-left: 20px;">
                            <div class="card-bx mb-0">
                                <img src="./card2.png" alt="">
                                <div class="card-info text-white">
                                    <p class="mb-1">Purple Card</p>
                                    <h2 class="fs-36 text-white mb-sm-4 mb-3">$45,662</h2>
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
                            </div>
                        </div>
                        <div class="items" style="margin-left: 20px;">
                            <div class="card-bx mb-0">
                                <img src="./card3.png" alt="">
                                <div class="card-info text-white">
                                    <p class="mb-1">Green Card</p>
                                    <h2 class="fs-36 text-white mb-sm-4 mb-3">$23,511</h2>
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
                            </div>
                        </div>
                        <div class="items" style="margin-left: 20px;">
                            <div class="card-bx mb-0">
                                <img src="./card3.png" alt="">
                                <div class="card-info text-white">
                                    <p class="mb-1">Orange Card</p>
                                    <h2 class="fs-36 text-white mb-sm-4 mb-3">$340</h2>
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
                            </div>
                        </div>

                    </div>



                </div>
            </div>
            </v-app>
</template>

<script scoped>
//import axios from 'axios';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
//import VueApexCharts from 'vue-apexcharts';
//import card_listVue from './card_list.vue';
//import card_statical from './card_statical.vue'
export default {
    name: 'card_center',

    

    data: () => {

        return {
            

            
        }
    },

};
</script>
  
<style scoped>
.score-bar {
    width: 100%;
    height: 20px;
    background-color: #e0e0e0;
    border-radius: 10px;
    overflow: scroll;
}

.score-progress {
    height: 100%;
    background-color: #4caf50;
    transition: width 0.3s ease-in-out;
}
</style>