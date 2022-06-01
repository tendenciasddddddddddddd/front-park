import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import toasted from "vue-toasted";

import GAuth from 'vue-google-oauth2'

import "@/assets/vendor/nucleo/css/nucleo.css";
import "@/assets/vendor/font-awesome/css/font-awesome.css";
import "@/assets/scss/argon.scss";

import proxyConfig from './proxies/_config'

Vue.config.productionTip = false

Vue.use(toasted, {
  iconPack: "fontawesome"
});

Vue.use({
  install(Vue){
    Object.defineProperty(Vue.prototype, '$proxies',{
      value: proxyConfig
    })
  }
})

const gauthOption = {
  clientId: '776329604046-ftt9eq502a2soskkg2geecdrnspmenl3.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'consent',
  fetch_basic_profile : true,
}
Vue.use(GAuth, gauthOption)

Vue.use({
  install(Vue){
    Object.defineProperty(Vue.prototype, '$user',{
      value: {
        initialize (){
          let token = localStorage.getItem('access_token').split('.');
          let user = JSON.parse(
            decodeURIComponent(
              atob(token[1])
              .split("")
              .map(function(c){
                return(
                  "%" + ("00"+c.charCodeAt(0).toString(16)).slice(-2)
                );
              })
              .join("")
            )
          );
            store.state.user ={
                 id: user.id,
                 roles : user.role,
                 name : user.name,
            };
            console.log(user)
        }
      }
    })
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
