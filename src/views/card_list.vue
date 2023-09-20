<template>
    <div class="col-xl-9" style="width: 100%;">
        <div class="row">
            <div class="col-xl-12">
                <div class="card">
                    <div class="card-header d-sm-flex d-block border-0 pb-0">
                        <div>
                            <h4 class="fs-20 text-black">Card List</h4>
                            <span class="fs-12">Lorem ipsum dolor sit amet, consectetur</span>
                        </div>
                        <select class="default-select style-1 mt-3 mt-sm-0">
                            <option>Newest</option>
                            <option>Details</option>
                            <option>Cancel</option>
                        </select>
                    </div>
                    <div class="card-body pb-0">
                        <div class="d-flex mb-3 border-bottom justify-content-between flex-wrap align-items-center">
                            <div class="d-flex pb-3 align-items-center">
                                <img src="./1.jpg" alt="" class="rounded me-3" width="100">
                                <div class="me-3">
                                    <p class="fs-14 mb-1">Card Type</p>
                                    <span class="text-black font-w500">Primary</span>
                                </div>
                            </div>
                            <div class="me-3 pb-3">
                                <p class="fs-14 mb-1">Bank</p>
                                <span class="text-black font-w500">ABC Bank</span>
                            </div>
                            <div class="me-3 pb-3">
                                <p class="fs-14 mb-1">Card Number</p>
                                <span class="text-black font-w500">**** **** **** 2256</span>
                            </div>
                            <div class="me-3 pb-3">
                                <p class="fs-14 mb-1">Namein Card</p>
                                <span class="text-black font-w500">Franklin Jr.</span>
                            </div>
                            <a href="transactions-details.html" class="fs-14 btn-link me-3 pb-3"
                                style="text-decoration: none; ">See Number</a>
                            <div class="dropdown pb-3">
                                <div class="btn-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10 11.9999C10 13.1045 10.8954 13.9999 12 13.9999C13.1046 13.9999 14 13.1045 14 11.9999C14 10.8954 13.1046 9.99994 12 9.99994C10.8954 9.99994 10 10.8954 10 11.9999Z"
                                            fill="black"></path>
                                        <path
                                            d="M10 4.00006C10 5.10463 10.8954 6.00006 12 6.00006C13.1046 6.00006 14 5.10463 14 4.00006C14 2.89549 13.1046 2.00006 12 2.00006C10.8954 2.00006 10 2.89549 10 4.00006Z"
                                            fill="black"></path>
                                        <path
                                            d="M10 20C10 21.1046 10.8954 22 12 22C13.1046 22 14 21.1046 14 20C14 18.8954 13.1046 18 12 18C10.8954 18 10 18.8954 10 20Z"
                                            fill="black"></path>
                                    </svg>
                                </div>
                                <div class="dropdown-menu dropdown-menu-end">
                                    <a class="dropdown-item" href="javascript:void()">Delete</a>
                                    <a class="dropdown-item" href="javascript:void()">Edit</a>
                                </div>
                            </div>
                        </div>
                        <div v-for="item in list" v-bind:key="item.id"
                            class="d-flex mb-3 border-bottom justify-content-between flex-wrap align-items-center">
                            <div class="d-flex pb-3 align-items-center">
                                <img src="./2.jpg" alt="" class="rounded me-3" width="100">
                                <div class="me-3">
                                    <p class="fs-14 mb-1">Card Type</p>
                                    <span class="text-black font-w500">{{ item.relacion }}</span>
                                </div>
                            </div>
                            <div class="me-3 pb-3" style="max-width: 5rem;">
                                <p class="fs-14 mb-1">Bank</p>
                                <span class="text-black font-w500">{{ item.tipo }}</span>
                            </div>
                            <div class="me-3 pb-3">
                                <p class="fs-14 mb-1">Card Number</p>
                                <span class="text-black font-w500">{{ item.numero }}</span>
                            </div>
                            <div class="me-3 pb-3" style="max-width: 5rem;">
                                <p class="fs-14 mb-1">Namein Card</p>
                                <span class="text-black font-w500">{{ item.alias }}</span>
                            </div>
                            <a href="transactions-details.html" class="fs-14 btn-link me-3 pb-3"
                                style="text-decoration: none; ">See Number</a>
                            <div class="dropdown pb-3">
                                <div class="btn-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10 11.9999C10 13.1045 10.8954 13.9999 12 13.9999C13.1046 13.9999 14 13.1045 14 11.9999C14 10.8954 13.1046 9.99994 12 9.99994C10.8954 9.99994 10 10.8954 10 11.9999Z"
                                            fill="black"></path>
                                        <path
                                            d="M10 4.00006C10 5.10463 10.8954 6.00006 12 6.00006C13.1046 6.00006 14 5.10463 14 4.00006C14 2.89549 13.1046 2.00006 12 2.00006C10.8954 2.00006 10 2.89549 10 4.00006Z"
                                            fill="black"></path>
                                        <path
                                            d="M10 20C10 21.1046 10.8954 22 12 22C13.1046 22 14 21.1046 14 20C14 18.8954 13.1046 18 12 18C10.8954 18 10 18.8954 10 20Z"
                                            fill="black"></path>
                                    </svg>
                                </div>
                                <div class="dropdown-menu dropdown-menu-end">
                                    <a class="dropdown-item" href="javascript:void()">Delete</a>
                                    <a class="dropdown-item" href="javascript:void()">Edit</a>
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
import axios from 'axios';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
//import VueApexCharts from 'vue-apexcharts';
export default {
    name: 'card_list',

    

    data: () => {

        return {
            list: [],

           
        }
    },

    mounted() {
        this.fetchData();
    },

    methods: {
        fetchData() {
            axios.get("https://abe8-123-252-134-114.ngrok.io/api/json/get-account-types")
                .then(response => {
                    //console.log("Full API Response:", response.data);
                    //console.log("listaCuenta:", response.data.listaCuenta); // Log the listaCuenta property
                    //console.log("cuentas:", response.data.listaCuenta[0].cuentas); // Access cuentas array from the first item in listaCuenta
                    this.list = response.data.listaCuenta[0].cuentas; // Assign the cuentas array to your data property
                })
                .catch(error => {
                    console.error("Error fetching data:", error);
                });
        },
    },



};
</script>