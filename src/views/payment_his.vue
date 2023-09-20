<template>
    <!-- row -->
    <div class="container-fluid">
        <div class="col-xl-12">
						<div class="d-sm-flex  d-block align-items-center mb-4">
							<div class="me-auto">
								<h4 class="fs-20 text-black">Payment History</h4>
								<span class="fs-12">Lorem ipsum dolor sit amet, consectetur</span>
							</div>
							<div class="dropdown custom-dropdown mb-0 mt-3 mt-sm-0">
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
						</div>
					</div>
					<div class="col-lg-12">
						<div class="table-responsive table-hover fs-14">
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
										<th>Email</th>
										<th>Service Type</th>
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
												<img src="images/avatar/25.png" alt="" class="rounded-circle me-3" width="50">
												<div>
													<h6 class="fs-16 text-black font-w600 mb-0 text-nowrap">XYZ Store ID</h6>
													<span class="fs-14">Online Shop</span>
												</div>
											</div>
										</td>
										<td><span class="text-black">xyzstore@mail.com</span></td>
										<td><span class="text-black">Server Maintenance </span></td>
										<td><a href="javascript:void(0)" class="btn btn-sm btn-success light">Completed</a></td>
										<td>
											<div class="dropdown mb-auto">
												<div class="btn-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M10 11.9999C10 13.1045 10.8954 13.9999 12 13.9999C13.1046 13.9999 14 13.1045 14 11.9999C14 10.8954 13.1046 9.99994 12 9.99994C10.8954 9.99994 10 10.8954 10 11.9999Z" fill="black"></path>
														<path d="M10 4.00006C10 5.10463 10.8954 6.00006 12 6.00006C13.1046 6.00006 14 5.10463 14 4.00006C14 2.89549 13.1046 2.00006 12 2.00006C10.8954 2.00006 10 2.89549 10 4.00006Z" fill="black"></path>
														<path d="M10 20C10 21.1046 10.8954 22 12 22C13.1046 22 14 21.1046 14 20C14 18.8954 13.1046 18 12 18C10.8954 18 10 18.8954 10 20Z" fill="black"></path>
													</svg>
												</div>
												<div class="dropdown-menu dropdown-menu-end">
													<a class="dropdown-item" href="javascript:void(0)">Delete</a>
													<a class="dropdown-item" href="javascript:void(0)">Edit</a>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td>
											<div class="checkbox me-0 align-self-center">
												<div class="form-check custom-checkbox ">
													<input type="checkbox" class="form-check-input" id="customCheckBox3" required="">
													<label class="form-check-label" for="customCheckBox3"></label>
												</div>
											</div>
										</td>
										<td><span class="text-black font-w500">#123412451</span></td>
										<td><span class="text-black text-nowrap">#June 1, 2020, 08:22 AM</span></td>
										<td>
											<div class="d-flex align-items-center">
												<img src="images/avatar/19.png" alt="" class="rounded-circle me-3" width="50">
												<div>
													<h6 class="fs-16 font-w600 mb-0 text-nowrap"><a href="javascript:void(0)" class="text-black">David Oconner</a></h6>
												</div>
											</div>
										</td>
										<td><span class="text-black">davidocon@mail.com</span></td>
										<td><span class="text-black">Clean Up </span></td>
										<td><a href="javascript:void(0)" class="btn btn-sm btn-warning light">Pending</a></td>
										<td>
											<div class="dropdown mb-auto">
												<div class="btn-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M10 11.9999C10 13.1045 10.8954 13.9999 12 13.9999C13.1046 13.9999 14 13.1045 14 11.9999C14 10.8954 13.1046 9.99994 12 9.99994C10.8954 9.99994 10 10.8954 10 11.9999Z" fill="black"></path>
														<path d="M10 4.00006C10 5.10463 10.8954 6.00006 12 6.00006C13.1046 6.00006 14 5.10463 14 4.00006C14 2.89549 13.1046 2.00006 12 2.00006C10.8954 2.00006 10 2.89549 10 4.00006Z" fill="black"></path>
														<path d="M10 20C10 21.1046 10.8954 22 12 22C13.1046 22 14 21.1046 14 20C14 18.8954 13.1046 18 12 18C10.8954 18 10 18.8954 10 20Z" fill="black"></path>
													</svg>
												</div>
												<div class="dropdown-menu dropdown-menu-end">
													<a class="dropdown-item" href="javascript:void(0)">Delete</a>
													<a class="dropdown-item" href="javascript:void(0)">Edit</a>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td>
											<div class="checkbox me-0 align-self-center">
												<div class="form-check custom-checkbox ">
													<input type="checkbox" class="form-check-input" id="customCheckBox4" required="">
													<label class="form-check-label" for="customCheckBox4"></label>
												</div>
											</div>
										</td>
										<td><span class="text-black font-w500">#123412451</span></td>
										<td><span class="text-black text-nowrap">#June 1, 2020, 08:22 AM</span></td>
										<td>
											<div class="d-flex align-items-center">
												<img src="images/avatar/20.png" alt="" class="rounded-circle me-3" width="50">
												<div>
													<h6 class="fs-16 font-w600 mb-0 text-nowrap"><a href="javascript:void(0)" class="text-black">Julia Esteh</a></h6>
												</div>
											</div>
										</td>
										<td><span class="text-black">juliaesteh@mail.com</span></td>
										<td><span class="text-black">Upgrade Component </span></td>
										<td><a href="javascript:void(0)" class="btn btn-sm btn-danger light">Canceled</a></td>
										<td>
											<div class="dropdown mb-auto">
												<div class="btn-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M10 11.9999C10 13.1045 10.8954 13.9999 12 13.9999C13.1046 13.9999 14 13.1045 14 11.9999C14 10.8954 13.1046 9.99994 12 9.99994C10.8954 9.99994 10 10.8954 10 11.9999Z" fill="black"></path>
														<path d="M10 4.00006C10 5.10463 10.8954 6.00006 12 6.00006C13.1046 6.00006 14 5.10463 14 4.00006C14 2.89549 13.1046 2.00006 12 2.00006C10.8954 2.00006 10 2.89549 10 4.00006Z" fill="black"></path>
														<path d="M10 20C10 21.1046 10.8954 22 12 22C13.1046 22 14 21.1046 14 20C14 18.8954 13.1046 18 12 18C10.8954 18 10 18.8954 10 20Z" fill="black"></path>
													</svg>
												</div>
												<div class="dropdown-menu dropdown-menu-end">
													<a class="dropdown-item" href="javascript:void(0)">Delete</a>
													<a class="dropdown-item" href="javascript:void(0)">Edit</a>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td>
											<div class="checkbox me-0 align-self-center">
												<div class="form-check custom-checkbox ">
													<input type="checkbox" class="form-check-input" id="customCheckBox5" required="">
													<label class="form-check-label" for="customCheckBox5"></label>
												</div>
											</div>
										</td>
										<td><span class="text-black font-w500">#123412451</span></td>
										<td><span class="text-black text-nowrap">#June 1, 2020, 08:22 AM</span></td>
										<td>
											<div class="d-flex align-items-center">
												<img src="images/avatar/26.png" alt="" class="rounded-circle me-3" width="50">
												<div>
													<h6 class="fs-16 font-w600 mb-0 text-nowrap"><a href="javascript:void(0)" class="text-black">Power Supp Store</a></h6>
													<span class="fs-14">Online Shop</span>
												</div>
											</div>
										</td>
										<td><span class="text-black">xyzstore@mail.com</span></td>
										<td><span class="text-black">Server Maintenance </span></td>
										<td><a href="javascript:void(0)" class="btn btn-sm btn-success light">Completed</a></td>
										<td>
											<div class="dropdown mb-auto">
												<div class="btn-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M10 11.9999C10 13.1045 10.8954 13.9999 12 13.9999C13.1046 13.9999 14 13.1045 14 11.9999C14 10.8954 13.1046 9.99994 12 9.99994C10.8954 9.99994 10 10.8954 10 11.9999Z" fill="black"></path>
														<path d="M10 4.00006C10 5.10463 10.8954 6.00006 12 6.00006C13.1046 6.00006 14 5.10463 14 4.00006C14 2.89549 13.1046 2.00006 12 2.00006C10.8954 2.00006 10 2.89549 10 4.00006Z" fill="black"></path>
														<path d="M10 20C10 21.1046 10.8954 22 12 22C13.1046 22 14 21.1046 14 20C14 18.8954 13.1046 18 12 18C10.8954 18 10 18.8954 10 20Z" fill="black"></path>
													</svg>
												</div>
												<div class="dropdown-menu dropdown-menu-end">
													<a class="dropdown-item" href="javascript:void(0)">Delete</a>
													<a class="dropdown-item" href="javascript:void(0)">Edit</a>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td>
											<div class="checkbox me-0 align-self-center">
												<div class="form-check custom-checkbox ">
													<input type="checkbox" class="form-check-input" id="customCheckBox6" required="">
													<label class="form-check-label" for="customCheckBox6"></label>
												</div>
											</div>
										</td>
										<td><span class="text-black font-w500">#123412451</span></td>
										<td><span class="text-black text-nowrap">#June 1, 2020, 08:22 AM</span></td>
										<td>
											<div class="d-flex align-items-center">
												<img src="images/avatar/21.png" alt="" class="rounded-circle me-3" width="50">
												<div>
													<h6 class="fs-16 font-w600 mb-0 text-nowrap"><a href="javascript:void(0)" class="text-black">James Known</a></h6>
												</div>
											</div>
										</td>
										<td><span class="text-black">davidocon@mail.com</span></td>
										<td><span class="text-black">Clean Up</span></td>
										<td><a href="javascript:void(0)" class="btn btn-sm btn-warning light">Pending</a></td>
										<td>
											<div class="dropdown mb-auto">
												<div class="btn-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M10 11.9999C10 13.1045 10.8954 13.9999 12 13.9999C13.1046 13.9999 14 13.1045 14 11.9999C14 10.8954 13.1046 9.99994 12 9.99994C10.8954 9.99994 10 10.8954 10 11.9999Z" fill="black"></path>
														<path d="M10 4.00006C10 5.10463 10.8954 6.00006 12 6.00006C13.1046 6.00006 14 5.10463 14 4.00006C14 2.89549 13.1046 2.00006 12 2.00006C10.8954 2.00006 10 2.89549 10 4.00006Z" fill="black"></path>
														<path d="M10 20C10 21.1046 10.8954 22 12 22C13.1046 22 14 21.1046 14 20C14 18.8954 13.1046 18 12 18C10.8954 18 10 18.8954 10 20Z" fill="black"></path>
													</svg>
												</div>
												<div class="dropdown-menu dropdown-menu-end">
													<a class="dropdown-item" href="javascript:void(0)">Delete</a>
													<a class="dropdown-item" href="javascript:void(0)">Edit</a>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td>
											<div class="checkbox me-0 align-self-center">
												<div class="form-check custom-checkbox ">
													<input type="checkbox" class="form-check-input" id="customCheckBox7" required="">
													<label class="form-check-label" for="customCheckBox7"></label>
												</div>
											</div>
										</td>
										<td><span class="text-black font-w500">#123412451</span></td>
										<td><span class="text-black text-nowrap">#June 1, 2020, 08:22 AM</span></td>
										<td>
											<div class="d-flex align-items-center">
												<img src="images/avatar/22.png" alt="" class="rounded-circle me-3" width="50">
												<div>
													<h6 class="fs-16 font-w600 mb-0 text-nowrap"><a href="javascript:void(0)" class="text-black">Rock Lee</a></h6>
												</div>
											</div>
										</td>
										<td><span class="text-black">juliaesteh@mail.com</span></td>
										<td><span class="text-black">Upgrade Component </span></td>
										<td><a href="javascript:void(0)" class="btn btn-sm btn-danger light">Canceled</a></td>
										<td>
											<div class="dropdown mb-auto">
												<div class="btn-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M10 11.9999C10 13.1045 10.8954 13.9999 12 13.9999C13.1046 13.9999 14 13.1045 14 11.9999C14 10.8954 13.1046 9.99994 12 9.99994C10.8954 9.99994 10 10.8954 10 11.9999Z" fill="black"></path>
														<path d="M10 4.00006C10 5.10463 10.8954 6.00006 12 6.00006C13.1046 6.00006 14 5.10463 14 4.00006C14 2.89549 13.1046 2.00006 12 2.00006C10.8954 2.00006 10 2.89549 10 4.00006Z" fill="black"></path>
														<path d="M10 20C10 21.1046 10.8954 22 12 22C13.1046 22 14 21.1046 14 20C14 18.8954 13.1046 18 12 18C10.8954 18 10 18.8954 10 20Z" fill="black"></path>
													</svg>
												</div>
												<div class="dropdown-menu dropdown-menu-end">
													<a class="dropdown-item" href="javascript:void(0)">Delete</a>
													<a class="dropdown-item" href="javascript:void(0)">Edit</a>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td>
											<div class="checkbox me-0 align-self-center">
												<div class="form-check custom-checkbox ">
													<input type="checkbox" class="form-check-input" id="customCheckBox26" required="">
													<label class="form-check-label" for="customCheckBox26"></label>
												</div>
											</div>
										</td>
										<td><span class="text-black font-w500">#123412451</span></td>
										<td><span class="text-black text-nowrap">#June 1, 2020, 08:22 AM</span></td>
										<td>
											<div class="d-flex align-items-center">
												<img src="images/avatar/23.png" alt="" class="rounded-circle me-3" width="50">
												<div>
													<h6 class="fs-16 font-w600 mb-0 text-nowrap"><a href="javascript:void(0)" class="text-black">Geovanny Jr.</a></h6>
												</div>
											</div>
										</td>
										<td><span class="text-black">davidocon@mail.com</span></td>
										<td><span class="text-black">Clean Up</span></td>
										<td><a href="javascript:void(0)" class="btn btn-sm btn-warning light">Pending</a></td>
										<td>
											<div class="dropdown mb-auto">
												<div class="btn-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M10 11.9999C10 13.1045 10.8954 13.9999 12 13.9999C13.1046 13.9999 14 13.1045 14 11.9999C14 10.8954 13.1046 9.99994 12 9.99994C10.8954 9.99994 10 10.8954 10 11.9999Z" fill="black"></path>
														<path d="M10 4.00006C10 5.10463 10.8954 6.00006 12 6.00006C13.1046 6.00006 14 5.10463 14 4.00006C14 2.89549 13.1046 2.00006 12 2.00006C10.8954 2.00006 10 2.89549 10 4.00006Z" fill="black"></path>
														<path d="M10 20C10 21.1046 10.8954 22 12 22C13.1046 22 14 21.1046 14 20C14 18.8954 13.1046 18 12 18C10.8954 18 10 18.8954 10 20Z" fill="black"></path>
													</svg>
												</div>
												<div class="dropdown-menu dropdown-menu-end">
													<a class="dropdown-item" href="javascript:void(0)">Delete</a>
													<a class="dropdown-item" href="javascript:void(0)">Edit</a>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td>
											<div class="checkbox me-0 align-self-center">
												<div class="form-check custom-checkbox ">
													<input type="checkbox" class="form-check-input" id="customCheckBox28" required="">
													<label class="form-check-label" for="customCheckBox28"></label>
												</div>
											</div>
										</td>
										<td><span class="text-black font-w500">#123412451</span></td>
										<td><span class="text-black text-nowrap">#June 1, 2020, 08:22 AM</span></td>
										<td>
											<div class="d-flex align-items-center">
												<img src="images/avatar/24.png" alt="" class="rounded-circle me-3" width="50">
												<div>
													<h6 class="fs-16 font-w600 mb-0 text-nowrap"><a href="javascript:void(0)" class="text-black">Bella Ingrid</a></h6>
												</div>
											</div>
										</td>
										<td><span class="text-black">juliaesteh@mail.com</span></td>
										<td><span class="text-black">Upgrade Component</span></td>
										<td><a href="javascript:void(0)" class="btn btn-sm btn-danger light">Canceled</a></td>
										<td>
											<div class="dropdown mb-auto">
												<div class="btn-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M10 11.9999C10 13.1045 10.8954 13.9999 12 13.9999C13.1046 13.9999 14 13.1045 14 11.9999C14 10.8954 13.1046 9.99994 12 9.99994C10.8954 9.99994 10 10.8954 10 11.9999Z" fill="black"></path>
														<path d="M10 4.00006C10 5.10463 10.8954 6.00006 12 6.00006C13.1046 6.00006 14 5.10463 14 4.00006C14 2.89549 13.1046 2.00006 12 2.00006C10.8954 2.00006 10 2.89549 10 4.00006Z" fill="black"></path>
														<path d="M10 20C10 21.1046 10.8954 22 12 22C13.1046 22 14 21.1046 14 20C14 18.8954 13.1046 18 12 18C10.8954 18 10 18.8954 10 20Z" fill="black"></path>
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
                    <div class="footer">
            <div class="copyright">
                <p>Copyright © Designed &amp; Developed by <a href="http://dexignzone.com/" target="_blank">DexignZone</a> 2023</p>
            </div>
        </div>
    </div>
</template>
  
<script scoped>
import './style.css';
export default {
    name: 'payment_his',

    returns :{
       

    },
    
    methods :{
       
    }

};
</script>
  
<style scoped>

</style>
  
  