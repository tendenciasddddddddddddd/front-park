<template>
    <section class="section-hero section-shaped my-0">
        <div class="shape shape-style-1 shape-primary">
            <span class="span-150"></span>
            <span class="span-50"></span>
            <span class="span-50"></span>
            <span class="span-75"></span>
            <span class="span-100"></span>
            <span class="span-75"></span>
            <span class="span-50"></span>
            <span class="span-100"></span>
            <span class="span-50"></span>
            <span class="span-100"></span>
        </div>
        <div class="container shape-container d-flex align-items-center">
            <div class="col px-0">
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-7 text-center pt-lg">
                        <img src="img/brand/alogo_gpc.png" style="width: 200px;" class="img-fluid">
                        <p class="lead text-white mt-4 mb-5">Empieza a explorar las rutas y vistas del ecoparque atravez de realidad virtual.</p>
                        <div class="btn-wrapper">
                            <router-link to="/paseo"
                                        
                                         class="btn mb-3 mb-sm-0 btn-icon btn-info"
                                         type="info"
                                         icon="fa fa-code">
                               Rutas
                            </router-link>
                            <router-link to="/maps"
                                        
                                         class="btn mb-3 mb-sm-0 btn-icon btn-white"
                                         type="white"
                                         icon="ni ni-cloud-download-95">
                               Ubicación
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center justify-content-around stars-and-coded">
                    <div class="col-sm-4">
                      
                    </div>
                    <div class="col-sm-4 mt-4 mt-sm-0 text-right">
                        <span class="text-white alpha-7">Coded by</span>
                        <a href="javascript:;" class="">
                           Rosa, Zulema
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {};
</script>
<style>
</style>
