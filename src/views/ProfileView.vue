<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
        <section class="section section-skew" style="margin-top:-250px;">
            <div class="container">
                <div  class="card-profile " style="    background-color: #fff;">
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <img :src="image" class="rounded-circle">
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                <div class="card-profile-actions py-4 mt-lg-0">
                                    <base-button type="info" size="sm" class="mr-4">Connect</base-button>
                                    <base-button type="default" size="sm" class="float-right">Message</base-button>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center">
                                    <div>
                                        <span class="heading">22</span>
                                        <span class="description">Amigos</span>
                                    </div>
                                    <div>
                                        <span class="heading">10</span>
                                        <span class="description">Fotos</span>
                                    </div>
                                    <div>
                                        <span class="heading">89</span>
                                        <span class="description">Msm</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-5 " style="margin-bottom:15px;">
                            <h3>{{nombre}}
                                <span class="font-weight-light">, 27</span>
                            </h3>
                            <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>{{correo}}</div>
                            <br>
                        </div>
                       
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    data() {
        return {
          nombre :'',
          image :'',
          correo :'',
        }
    },
    methods: {
      inforUsers(){
      const info = JSON.parse(localStorage.getItem('Xf'));
      const avatar = JSON.parse(localStorage.getItem('Avatar'));
      this.image= avatar;
      this.nombre= info.nombre;
      this.correo = info.correo;
    },
   
    },
     created() {
    this.inforUsers();
  }
};
</script>

