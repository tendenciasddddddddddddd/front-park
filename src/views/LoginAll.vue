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
    <div v-if="ifLoaded" class="container pt-lg-md">
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
                <button v-if="!isAuthGoogle" @click="loginGoogleAuth()" style="padding: 0.25rem 1.25rem;  width: 100%;" class="btn btn-icon btn-neutral" type="neutral">
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
                  v-model="login.email" required type="email"
                  class="form-control mb-3"
                  placeholder="Correo Electrónico"
                  addon-left-icon="ni ni-email-83"
                />
                <input
                  v-model="login.password"
                  type="password" required
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
              <a href="#"  class="text-muted">
                <small style="color:#0070f3">← ¿Se te olvidó tu contraseña?  </small>
              </a>
            </div>
            <div class="col-6 text-right">
              <a @click="registerOption" href="javascript:;" class="text-muted">
                <small style="color:#0070f3">Crear una nueva cuenta →</small>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="container pt-lg-md">
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
                <small>Registrese con</small>
              </div>
              <div class="btn-wrapper text-center">
                <button @click="registerGoogleAuth" style="padding: 0.25rem 1.25rem;    width: 100%;" class="btn btn-icon btn-neutral" type="neutral">
                  <img slot="icon" src="img/icons/common/google.svg" />
                  Google
                </button>
                <div class="mt-3"></div>
              </div>
            </template>
            <template>
              <div class="text-center text-muted mb-4">
                <small>O registrese con credenciales</small>
              </div>
              <form @submit.prevent="registerSave">
                <input
                  v-model="register.fistname" required
                  class="form-control mb-3"
                  placeholder="Nombres"
                  addon-left-icon="ni ni-email-83"
                />
                <input
                  v-model="register.lastname" required
                  class="form-control mb-3"
                  placeholder="Apellidos"
                  addon-left-icon="ni ni-email-83"
                />
                <input
                  v-model="register.email" required type="email"
                  class="form-control mb-3"
                  placeholder="Correo Electrónico"
                  addon-left-icon="ni ni-email-83"
                />
                <input
                  v-model="register.password" required
                  type="password"
                  placeholder="Contraseña"
                  class="form-control"
                  addon-left-icon="ni ni-lock-circle-open"
                />

                <div class="text-center">
                  <button type="primary" class="btn my-4 btn-primary">
                    Crear una cuenta
                  </button>
                </div>
              </form>
            </template>
          </div>
          <div class="row mt-1">
            <div class="col-6">
             
            </div>
            <div class="col-6 text-right">
              <a @click="loginOption" href="javascript:;" class="text-muted">
                <small style="color:#0070f3">← Login</small>
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
  name: "LoginAll",
  data() {
    return {
      ifLoaded: true,
      login: {
        email: null,
        password: null,
        loading: false,
      },
       register: {
         username:'',
        fistname: "",
        lastname: "",
        fullname: "",
        email: null,
        password: null,
        photo: 'https://res.cloudinary.com/stebann/image/upload/v1634918496/default-100_namn33.webp',
      },
      isLoading: false,
      isLoading2: false,
      isLoading3: false,
      infos: {
        nombre: null,
        correo: null,
      },
      isAuthGoogle: false,
    };
  },
  methods: {
    async logOut() {
      try {
        const result = this.$gAuth.signOut();
        console.log("result", result);
      } catch (error) {
        console.error(error, "LOG OUT");
      }
    },
      async loginGoogleAuth() {
      try {
        const googleUser = await this.$gAuth.signIn();
        const users = googleUser.getBasicProfile().getEmail();
        if (this.$gAuth.isAuthorized) {
          console.log(users)
          this.postGoogleAuth(users);
        }
      } catch (error) {
        console.log(error)
        this.toast("No se puede conectar con el API.");
      }
    },
      postGoogleAuth(users) {
      this.isAuthGoogle = true;
      this.login.email = users;
      this.$proxies.identityProxy
        .GoogleAuthApi(this.login)
        .then((x) => {
          console.log(x.data)
          let img = x.data.isaccesos.photo;
          this.infos.nombre = x.data.isaccesos.fullname;
          this.infos.correo = x.data.isaccesos.email;
          localStorage.setItem("access_token", x.data.isaccesos.tokens);
          localStorage.setItem("Xf", JSON.stringify(this.infos));
          localStorage.setItem("Avatar", JSON.stringify(img));
          this.$user.initialize();
          this.isAuthGoogle = false;
          this.$parent.isLoggedIn = true;
          this.$router.push("/").catch(() => {});
        })
        .catch((x) => {
          if (!x.response) {
            this.toast("Por favor revise su conexion a internet");
          }
          if (x.response.status == 400) {
            this.toast("El usuario no esta registrado en el sistema");
            this.isAuthGoogle = false;
          } else {
            this.toast("La cuenta de correo electronico no existe");
            this.isAuthGoogle = false;
          }
        });
    },
//----------------------------------
    async registerGoogleAuth() {
      try {
        const googleUser = await this.$gAuth.signIn();
        const profile = googleUser.getBasicProfile();
        if (this.$gAuth.isAuthorized) {
          this.register.fistname = profile.getGivenName();
          this.register.lastname = profile.getFamilyName();
          this.register.fullname = profile.getName();
          this.register.photo = profile.getImageUrl();
          this.register.password = profile.getGivenName();
          this.register.email = profile.getEmail();
          this.register.username = profile.getId();
          this.registerSaveGoogle();
        }
      } catch (error) {
        console.log(error)
        this.toast("No se puede conectar con el API.");
      }
    },


    registerOption(){
        this.ifLoaded= false;
        this. __limpiarCamposRegister()
    },
    loginOption(){
       this.ifLoaded= true;
       this.__limpiarCampos()
    },
    authenticate() {
      this.isLoading = true;
      this.$proxies.identityProxy
        .login(this.login)
        .then((x) => {
          let img = x.data.isaccesos.photo;
          this.infos.nombre = x.data.isaccesos.fullname;
          this.infos.correo = x.data.isaccesos.email;
          localStorage.setItem("access_token", x.data.isaccesos.tokens);
          localStorage.setItem("info_user", JSON.stringify(this.infos));
          localStorage.setItem("avatar_user", JSON.stringify(img));
          console.log(x.data)
          this.$user.initialize();
          this.isLoading = false;
          this.$parent.isLoggedIn = true;
          this.$router.push("/").catch(() => {});

        })
        .catch((x) => {
        console.log(x);
          if (!x.response) {
            this.toast("Por favor revise su conexion a internet")
            this.isLoading = false;
          } else if (x.response.status == 400) {
            this.__limpiarCampos();
            this.toast("El usuario no esta registrado en el sistema");
            this.isLoading = false;
          } else if (x.response.status == 402) {
            this.__limpiarCampos();
            this.toast("Contraseña Invalida");
            this.isLoading = false;
          } else {
            this.__limpiarCampos();
            this.toast("La cuenta de correo electronico no existe");
            this.isLoading = false;
          }
        });
    },
    registerSave(){
      this.isLoading2 = true;
      this.register.fullname = this.register.fistname.trim() + " " + this.register.lastname.trim();
      this.register.username = this.register.fistname.trim()
      this.$proxies.identityProxy
        .register(this.register)
        .then((x) => {
         console.log(x.data)
        this.isLoading2 = false;
        this. __limpiarCamposRegister();
        this.toast("Registro exitoso, ya puede iniciar sesión.")
        this.loginOption();
        })
        .catch((x) => {
           console.log(x);
           this. __limpiarCamposRegister();
           this.toast("Por favor revise su conexion a internet.")
        });
    },
        registerSaveGoogle(){
      this.isLoading3 = true;
      this.$proxies.identityProxy
        .register(this.register)
        .then((x) => {
         console.log(x.data)
        this.isLoading2 = false;
        this. __limpiarCamposRegister();
        this.toast("Registro exitoso, ya puede iniciar sesión.")
        this.loginOption();
        })
        .catch((error) => {
           this. __limpiarCamposRegister();
          if(error.response){
                  if(error.response.status==400){
                    this.toast(error.response.data.message);
                  }
                }
                else if(error.request){
                  this.$dialog.alert('❌ Error en el servidor no se pudo completar la solicitud')
                }else{
                  console.log('Error', error.message); 
                }
        });
    },
    __limpiarCampos() {
      this.login.email = "";
      this.login.password = "";
    },
    __limpiarCamposRegister() {
      this.register.email = "";
      this.register.password = "";
      this.register.fistname = "";
      this.register.lastname = "";
      this.register.fullname = "";
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
};
</script>

