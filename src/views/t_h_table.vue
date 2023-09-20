<template>
	<div class="content-body" style="margin-top: 5rem; background: #EFEFEF !important;">
	  <!-- row -->
	  <div class="container-fluid">
		<div class="page-titles form-head d-flex flex-wrap justify-content-between align-items-center mb-4">
		  <h2 class="text-black font-w600 mb-0 me-auto mb-2 mb-xl-0 pe-3">Transactions History</h2>
		  <div class="dropdown custom-dropdown me-xl-3 me-0 mb-0">
			<div class="btn bg-white btn-rounded " role="button" data-bs-toggle="dropdown" aria-expanded="false">
			  <svg class="me-2" width="53" height="35" viewBox="0 0 53 35" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect x="0.757812" y="0.120972" width="52.2424" height="34.7581" rx="16" fill="#FF7426" />
				<mask id="mask0" maskUnits="userSpaceOnUse" x="0" y="0" width="54" height="35">
				  <rect x="0.757812" y="0.120972" width="52.2424" height="34.7581" rx="16" fill="#6418C3" />
				</mask>
				<g mask="url(#mask0)">
				  <path
					d="M15.3428 -0.19458C18.6035 0.533213 25.5793 4.70863 27.3962 15.5879C29.6674 29.1871 49.8711 32.353 59.8841 31.0428"
					stroke="#FF9900" />
				  <path
					d="M16.624 -0.537781C19.8848 0.190012 26.8605 4.36543 28.6775 15.2447C30.9486 28.8439 51.1523 32.0098 61.1653 30.6996"
					stroke="#FF9900" />
				  <path
					d="M17.9043 -0.880981C21.1651 -0.153188 28.1408 4.02223 29.9577 14.9015C32.2289 28.5007 52.4326 31.6666 62.4456 30.3564"
					stroke="#FF9900" />
				  <path
					d="M19.1855 -1.22412C22.4463 -0.496328 29.4221 3.67909 31.239 14.5584C33.5101 28.1575 53.7139 31.3235 63.7269 30.0132"
					stroke="#FF9900" />
				  <path
					d="M20.4658 -1.56732C23.7266 -0.839529 30.7023 3.33589 32.5193 14.2152C34.7904 27.8143 54.9941 30.9803 65.0071 29.67"
					stroke="#FF9900" />
				  <circle cx="-6.99918" cy="33.8755" r="11.9998" fill="#FF8F50" />
				  <circle cx="51.0804" cy="9.08316" r="9.345" fill="#FB6A19" />
				  <circle cx="51.0804" cy="9.08319" r="7.0697" fill="#FF823C" />
				  <circle cx="51.0805" cy="9.08315" r="4.79439" fill="#FF9E67" />
				</g>
			  </svg>
			  Orange Card
			  <i class="fa fa-caret-down text-primary ms-3" aria-hidden="true"></i>
			</div>
			<div class="dropdown-menu dropdown-menu-end">
			  <a class="dropdown-item" href="javascript:void(0);">Details</a>
			  <a class="dropdown-item text-danger" href="javascript:void(0);">Cancel</a>
			</div>
		  </div>
		  <a href="javascript:void(0)" class="btn btn-primary btn-rounded me-3 " data-bs-toggle="modal"
			data-bs-target="#exampledownload" style="background-color: #1EAAE7 ; outline: none; border: none;">
			<i class="las la-download scale5 me-3"></i>
			Download Report</a>
		  <div class="dropdown custom-dropdown mb-0">
			<div class="btn btn-light btn-rounded" role="button" data-bs-toggle="dropdown" aria-expanded="false">
			  <i class="las la-calendar-alt scale5 me-3"></i>
			  Filter Date
			  <i class="fa fa-caret-down text-primary ms-3" aria-hidden="true"></i>
			</div>
			<div class="dropdown-menu dropdown-menu-end">
			  <a class="dropdown-item" href="javascript:void(0);">Details</a>
			  <a class="dropdown-item text-danger" href="javascript:void(0);">Cancel</a>
			</div>
		  </div>
		  <!-- Modal -->
		  <div class="modal fade" id="exampledownload">
			<div class="modal-dialog modal-dialog-centered" role="document">
			  <div class="modal-content">
				<div class="modal-header">
				  <h5 class="modal-title">Modal title</h5>
				  <button type="button" class="close" data-bs-dismiss="modal"><span>&times;</span>
				  </button>
				</div>
				<div class="modal-body">
				  <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
					eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
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
		  <div class="col-lg-12">
			<div class="table-responsive table-hover fs-14 card-table">
			  <table class="table display mb-4 dataTablesCard " id="example5">
				<thead>
				  <tr>
					<th>
					  <div class="checkbox me-0 align-self-center">
						<div class="form-check custom-checkbox ">
						  <input type="checkbox" class="form-check-input" id="checkAll" required="">
						  <label class="form-check-label" for="checkAll"></label>
						</div>
					  </div>
					</th>
					<th>ID Invoice</th>
					<th>Date</th>
					<th>Recipient</th>
					<th>Amount</th>
					<th>Type</th>
					<th>Location</th>
					<th>Status</th>
					<th class="text-end">Actions</th>
				  </tr>
				</thead>
				<tbody>
				  <tr>
					<td>
					  <div class="checkbox me-0 align-self-center">
						<div class="form-check custom-checkbox ">
						  <input type="checkbox" class="form-check-input" id="customCheckBox2" required="">
						  <label class="form-check-label" for="customCheckBox2"></label>
						</div>
					  </div>
					</td>
					<td><span class="text-black font-w500">#123412451</span></td>
					<td><span class="text-black text-nowrap">#June 1, 2020, 08:22 AM</span></td>
					<td>
					  <div class="d-flex align-items-center">
						<img src="images/avatar/11.png" alt="" class="rounded-circle me-3" width="50">
						<div>
						  <h6 class="fs-16 font-w600 mb-0 text-nowrap"><a href="transactions-details.html"
							  class="text-black">David Oconner</a></h6>
						</div>
					  </div>
					</td>
					<td><span class="text-black fs-16 font-w600">$128.89</span></td>
					<td>
					  <div class="text-black">
						<span class="me-2 oi-icon bgl-success">
						  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clip-path="url(#clip0)">
							  <path
								d="M11.4238 16.2304C11.2206 15.8106 11.4001 15.3027 11.8199 15.0996C12.9878 14.5376 13.9764 13.6642 14.6805 12.5707C15.4016 11.4501 15.7842 10.1501 15.7842 8.80952C15.7842 4.96369 12.6561 1.83556 8.81022 1.83556C4.96439 1.83556 1.83626 4.96369 1.83626 8.80952C1.83626 10.1501 2.21881 11.4501 2.93652 12.5741C3.6373 13.6676 4.62923 14.541 5.7972 15.103C6.21699 15.3061 6.39642 15.8106 6.19329 16.2337C5.99017 16.6535 5.48574 16.833 5.06256 16.6298C3.61022 15.9324 2.38131 14.8491 1.51126 13.4882C0.617512 12.0934 0.143554 10.4751 0.143554 8.80952C0.143554 6.49389 1.04408 4.31707 2.68262 2.68192C4.31777 1.04337 6.4946 0.142853 8.81022 0.142854C11.1258 0.142854 13.3027 1.04337 14.9378 2.68192C16.5764 4.32046 17.4769 6.4939 17.4769 8.80952C17.4769 10.4751 17.0029 12.0934 16.1058 13.4882C15.2324 14.8457 14.0034 15.9324 12.5545 16.6298C12.1313 16.8296 11.6269 16.6535 11.4238 16.2304Z"
								fill="#2BC155" />
							  <path
								d="M12.1045 9.2598C12.2704 9.42569 12.3516 9.64235 12.3516 9.85902C12.3516 10.0757 12.2704 10.2924 12.1045 10.4582L9.97506 12.5877C9.66361 12.8991 9.25059 13.0684 8.81387 13.0684C8.37715 13.0684 7.96074 12.8957 7.65267 12.5877L5.52324 10.4582C5.19147 10.1265 5.19147 9.59157 5.52324 9.2598C5.85501 8.92803 6.38991 8.92803 6.72168 9.2598L7.9709 10.509L7.9709 5.69834C7.9709 5.23116 8.35007 4.85199 8.81725 4.85199C9.28444 4.85199 9.66361 5.23116 9.66361 5.69834L9.66361 10.5124L10.9128 9.26319C11.2378 8.93142 11.7727 8.93142 12.1045 9.2598Z"
								fill="#2BC155" />
							</g>
							<defs>
							  <clipPath id="clip0">
								<rect width="17.3333" height="17.3333" fill="white"
								  transform="matrix(-9.93477e-08 1 1 9.93477e-08 0.143555 0.142853)" />
							  </clipPath>
							</defs>
						  </svg>
						</span>
						Outcome
					  </div>
					</td>
					<td><span class="text-black">Medan, <br>Sumut Indonesia</span></td>
					<td><a href="javascript:void(0)" class="btn btn-sm btn-warning light">Pending</a></td>
					<td>
					  <div class="dropdown mb-auto">
						<div class="btn-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
						  <a class="dropdown-item" href="javascript:void(0)">Delete</a>
						  <a class="dropdown-item" href="javascript:void(0)">Edit</a>
						</div>
					  </div>
					</td>
				  </tr>
  
  
  
  
  
  
  
  
				  <tr v-for="item in list" v-bind:key="item.id">
					<td>
					  <div class="checkbox me-0 align-self-center">
						<div class="form-check custom-checkbox ">
						  <input type="checkbox" class="form-check-input" id="customCheckBox241" required="">
						  <label class="form-check-label" for="customCheckBox241"></label>
						</div>
					  </div>
					</td>
					<td><span class="text-black font-w500">#123412451</span></td>
					<td><span class="text-black text-nowrap">#June 1, 2020, 08:22 AM</span></td>
					<td>
					  <div class="d-flex align-items-center">
						<img src="images/avatar/20.png" alt="" class="rounded-circle me-3" width="50">
						<div style="width:10rem; overflow: scroll;">
						  <h6 class="fs-16 font-w600 mb-0 text-nowrap"><a href="transactions-details.html"
							  class="text-black" >{{ item.descripcion }}</a></h6>
						</div>
					  </div>
					</td>
					<td><span class="text-black fs-16 font-w600">${{ item.cantidad }}</span></td>
					<td>
					  <div class="text-black">
						<span class="me-2 oi-icon bgl-success">
						  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clip-path="url(#clip03)">
							  <path
								d="M11.4238 16.2304C11.2206 15.8106 11.4001 15.3027 11.8199 15.0996C12.9878 14.5376 13.9764 13.6642 14.6805 12.5707C15.4016 11.4501 15.7842 10.1501 15.7842 8.80952C15.7842 4.96369 12.6561 1.83556 8.81022 1.83556C4.96439 1.83556 1.83626 4.96369 1.83626 8.80952C1.83626 10.1501 2.21881 11.4501 2.93652 12.5741C3.6373 13.6676 4.62923 14.541 5.7972 15.103C6.21699 15.3061 6.39642 15.8106 6.19329 16.2337C5.99017 16.6535 5.48574 16.833 5.06256 16.6298C3.61022 15.9324 2.38131 14.8491 1.51126 13.4882C0.617512 12.0934 0.143554 10.4751 0.143554 8.80952C0.143554 6.49389 1.04408 4.31707 2.68262 2.68192C4.31777 1.04337 6.4946 0.142853 8.81022 0.142854C11.1258 0.142854 13.3027 1.04337 14.9378 2.68192C16.5764 4.32046 17.4769 6.4939 17.4769 8.80952C17.4769 10.4751 17.0029 12.0934 16.1058 13.4882C15.2324 14.8457 14.0034 15.9324 12.5545 16.6298C12.1313 16.8296 11.6269 16.6535 11.4238 16.2304Z"
								fill="#2BC155" />
							  <path
								d="M12.1045 9.2598C12.2704 9.42569 12.3516 9.64235 12.3516 9.85902C12.3516 10.0757 12.2704 10.2924 12.1045 10.4582L9.97506 12.5877C9.66361 12.8991 9.25059 13.0684 8.81387 13.0684C8.37715 13.0684 7.96074 12.8957 7.65267 12.5877L5.52324 10.4582C5.19147 10.1265 5.19147 9.59157 5.52324 9.2598C5.85501 8.92803 6.38991 8.92803 6.72168 9.2598L7.9709 10.509L7.9709 5.69834C7.9709 5.23116 8.35007 4.85199 8.81725 4.85199C9.28444 4.85199 9.66361 5.23116 9.66361 5.69834L9.66361 10.5124L10.9128 9.26319C11.2378 8.93142 11.7727 8.93142 12.1045 9.2598Z"
								fill="#2BC155" />
							</g>
							<defs>
							  <clipPath id="clip03">
								<rect width="17.3333" height="17.3333" fill="white"
								  transform="matrix(-9.93477e-08 1 1 9.93477e-08 0.143555 0.142853)" />
							  </clipPath>
							</defs>
						  </svg>
						</span>
					   {{ item.tipo }}
					  </div>
					</td>
					<td><span class="text-black">Medan, <br>Sumut Indonesia</span></td>
					<td><a href="javascript:void(0)" class="btn btn-sm  btn-warning light">Pending</a></td>
					<td>
					  <div class="dropdown mb-auto">
						<div class="btn-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
						  <a class="dropdown-item" href="javascript:void(0)">Delete</a>
						  <a class="dropdown-item" href="javascript:void(0)">Edit</a>
						</div>
					  </div>
					</td>
				  </tr>
				</tbody>
  
			  </table>
			</div>
		  </div>
		</div>
	  </div>
	  <div class="footer">
		<div class="copyright">
		  <p>Copyright © Designed &amp; Developed by <a href="http://dexignzone.com/" target="_blank">DexignZone</a> 2023
		  </p>
		</div>
	  </div>
	</div>
  </template>
  <script>
  //import axios from 'axios';
  import data from '../views/data.json';
  
  export default {
	name: 't_h_table',
	data() {
	  return {
		list: [],
	   
	  };
	},
	mounted() {
	  this.fetchData();
	},
	methods: {
	fetchData() {
	  //console.log(data);
	  console.log("listaCuenta:",data.list_transaction[0].transaccion); 
	  this.list = data.list_transaction[0].transaccion;
	  /*axios.get('../viees/data.json')
		.then(response => {
		  console.log("Full API Response:", response.data);
		  //console.log("listaCuenta:", response.data.listaCuenta); 
		  //console.log("cuentas:", response.data.listaCuenta[0].cuentas); 
		  //this.list = response.data.listaCuenta[0].cuentas;
		})
		.catch(error => {
		  console.error("Error fetching data:", error);
		});*/
	},
  
  },
  };
  </script>
  <style>
  .page-titles {
	padding: 15px 25px;
	background: #fff;
	margin-bottom: 1.875rem;
	border-radius: 0.625rem;
	margin-top: 0;
	margin-left: 0;
	margin-right: 0;
	box-shadow: 0 2px 10px -3px rgba(0, 0, 0, 0.9);
  }
  
  .table> :not(caption)>*>* {
	padding: 0.5rem 0.5rem;
	color: var(--bs-table-color-state, var(--bs-table-color-type, var(--bs-table-color)));
	background-color: #fff;
	box-shadow: 0 2px 10px -3px rgba(0, 0, 0, 0.9);
	border-bottom-width: var(--bs-border-width);
	box-shadow: inset 0 0 0 9999px var(--bs-table-bg-state, var(--bs-table-bg-type, var(--bs-table-accent-bg)));
  }
  
  .copyright {
	text-align: center;
  }
  .content-body {
     margin-left:0rem !important;
    z-index: 0;
    transition: all .2s ease;
}
  
  </style>