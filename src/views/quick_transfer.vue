<template>
   
        <!-- row -->
       

           
               

                    <div class="quick_transfer">

                        <div class="col-xl-12">
                            <div class="card">
                                <div class="card-header d-sm-flex d-block border-0 pb-0">
                                    <div class="pr-3 mb-sm-0 mb-3 me-auto">
                                        <h4 class="fs-20 text-black mb-1">Quick Transfer</h4>
                                        <span class="fs-12">Lorem ipsum dolor sit amet, consectetur</span>
                                    </div>
                                    <span class="fs-24 text-black font-w600">$56,772.38</span>
                                </div>

                                <div class="card-body">



                                    <div class="a">
                                        <div class="item" >
                                            <div class="image-bx mb-2">
                                                <img src="./4.jpg" alt="" width="100" height="100">

                                            </div>
                                            <h6 class="fs-16 mb-0"><a href="transactions-details.html" class="text-black"
                                                    style="text-decoration: none;">David</a></h6>
                                            <span class="fs-12">@davidxc</span>
                                        </div>


                                        <div class="item" >
                                            <div class="image-bx mb-2">
                                                <img src="./4.jpg" alt="" width="100" height="100">

                                            </div>
                                            <h6 class="fs-16 mb-0"><a href="transactions-details.html" class="text-black"
                                                    style="text-decoration: none;">Cindy</a></h6>
                                            <span class="fs-12">@cindyss</span>
                                        </div>


                                        <div class="item"  >
                                            <div class="image-bx mb-2">
                                                <img src="./4.jpg" alt="" width="100" height="100">

                                            </div>
                                            <h6 class="fs-16 mb-0"><a href="transactions-details.html" class="text-black"
                                                    style="text-decoration: none;">Samuel</a></h6>
                                            <span class="fs-12">@sam224</span>
                                        </div>


                                        <div class="item"  >
                                            <div class="image-bx mb-2">
                                                <img src="./4.jpg" alt="" width="100" height="100">

                                            </div>
                                            <h6 class="fs-16 mb-0"><a href="transactions-details.html" class="text-black"
                                                    style="text-decoration: none;">Olivia</a></h6>
                                            <span class="fs-12">@oliv62</span>
                                        </div>


                                        
                                    </div>


                                    <form>
                                        <div class="form-group mb-0 row style-1 align-items-center">
                                            <div class="col-sm-3">
                                                <label class="fs-18 text-black font-w500">Amount</label>
                                            </div>
                                            <div class="col-sm-9">
                                                <div class="input-group">
                                                    <input type="number" class="form-control" style="margin-right: 0% !important;">
                                                    <div class="input-group-append">
                                                        <button class="btn btn-primary rounded" type="button" style="background-color:  #1EAAE7; border: none;">TRANSFER
                                                            NOW</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                   
                    </div>


           
        
   
</template>
<script scoped>
import './style.css';

export default {
    name: 'quick_transfer',
}
</script>

<style scoped>
.a{
    display: flex;
    flex-direction: row;
}

.item{
    display: flex;
flex-wrap: wrap;
}

</style>