<template>
  <div id="app">
     <template v-if="hasConfig">
        <div v-if="isLoggedIn">
          <AppHeader></AppHeader>
            <router-view />
        </div>
         <LoginAll v-else/>
     </template>
      <div v-else class="text-center" style="margin-top:300px; font-size:25px;">
      <p>Estamos cargando...</p>
    </div>
   
   
  </div>
</template>


<script>
import LoginAll from "./views/LoginAll.vue";
import AppHeader from "./layout/AppHeader.vue";
export default {
  name: "app",
  mounted() {
    this.initialize();
  },
  components: {
    LoginAll,AppHeader
  },
    data() {
    return {
      hasConfig: false,
      isLoggedIn: false,
    };
  },
   methods: {
    initialize() {//https://pcei-tulcan.com http://localhost:3000/
      let self = this;
      if (!localStorage.getItem("config")) {
        var url = "https://pcei-tulcan.com/api";
        localStorage.setItem("config", JSON.stringify(url));
        self.hasConfig = true;
       // window.location.reload(true);
      } else {
        self.hasConfig = true;
        __isLogedIn();
      }
      function __isLogedIn() {
        if (localStorage.getItem("access_token") != null) {
          self.$user.initialize();
          self.isLoggedIn = true;
        }
      }
    },
  },
};
</script>



