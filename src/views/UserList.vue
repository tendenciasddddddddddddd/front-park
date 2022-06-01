<template>
  <div>
    <div class="position-relative">
      <!-- shape Hero -->
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="container shape-container d-flex ">

            <table class="table table-striped" style="background-color:white">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Apellido</th>
                  <th scope="col">Correo</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in collection" :key="item.id">
                  <th scope="row">
                      <img width="30" height="30" :src="item.photo" style="border-radius: 100%;">
                  </th>
                  <td>{{item.fistname}}</td>
                  <td>{{item.lastname}}</td>
                  <td>{{item.email}}</td>
                </tr>
              
              </tbody>
            </table>

        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            isLoading: false,
            collection: {},
        }
    },
    methods: {
    getAll() {
      this.isLoading = true;
      this.$proxies.identityProxy
        .queryUsers() //EJECUTA LOS PROXIS QUE INYECTA AXIOS
        .then((x) => {
          this.collection = x.data;
          console.log(this.collection);
        })
        .catch(() => {
          console.log("Error imposible");
          this.isLoading = false;
        });
    },
    },
    created() {
      this.getAll();
    }
};
</script>
<style></style>
