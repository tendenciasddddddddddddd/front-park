<template>
   <section
    class="section section-shaped section-lg my-0"
    style="padding-top: 0rem"
  >
    <div class="shape shape-style-1 bg-gradient-default">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="container pt-lg-md">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <div
            type="secondary"
            shadow
            header-classes="bg-white pb-5"
            body-classes="px-lg-5 py-lg-5"
            class="border-0"
          >
            <template>
              <div class="text-muted text-center mb-3">
                <small>Inicia sesión con</small>
              </div>
              <div class="btn-wrapper text-center">
                <button class="btn btn-icon btn-neutral" type="neutral">
                  <img slot="icon" src="img/icons/common/google.svg" />
                  Google
                </button>
                <div class="mt-3"></div>
              </div>
            </template>
            <template>
              <div class="text-center text-muted mb-4">
                <small>O inicia sesión con credenciales</small>
              </div>
              <form @submit.prevent="authenticate">
                <input
                  v-model="login.email"
                  class="form-control mb-3"
                  placeholder="Correo Electrónico"
                  addon-left-icon="ni ni-email-83"
                />
                <input
                  v-model="login.password"
                  type="password"
                  placeholder="Contraseña"
                  class="form-control"
                  addon-left-icon="ni ni-lock-circle-open"
                />

                <div class="text-center">
                  <button type="primary" class="btn my-4 btn-primary">
                    Iniciar Sesión
                  </button>
                </div>
              </form>
            </template>
          </div>
          <div class="row mt-3">
            <div class="col-6">
              <a href="#" class="text-muted">
                <small>¿Se te olvidó tu contraseña?</small>
              </a>
            </div>
            <div class="col-6 text-right">
              <a href="#" class="text-muted">
                <small>Crear una nueva cuenta</small>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
 name: "RegisterUser",
  data() {
    return {
      register: {
        email: null,
        password: null,
        loading: false,
      },
      isLoading: false,
     
    };
  },
  methods: {
    authenticate() {
      this.isLoading = true;
      this.$proxies.identityProxy
        .register(this.register)
        .then((x) => {
         console.log(x.data)
          this.isLoading = false;
       

        })
        .catch((x) => {
           console.log(x);
           this.toast("Por favor revise su conexion a internet.")
        });
    },
    __limpiarCampos() {
      this.register.email = "";
      this.register.password = "";
    },
    toast(message) {
      this.$toasted.info(message, {
        duration: 3600,
        position: "top-right",
        icon: "check-circle",
        theme: "toasted-primary",
        action: {
          text: "CERRAR",
          onClick: (e, toastObject) => {
            toastObject.goAway(0);
          },
        },
      });
    },
  },
}
</script>

<style>

</style>