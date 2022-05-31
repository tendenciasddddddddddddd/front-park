import Axios from 'axios'
import IdentityProxy from './IdentityProxy.js'

//axios
Axios.defaults.headers.common.Accept='application/json'
//Axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

Axios.interceptors.request.use(
    config => {
        let token = localStorage.getItem('access_token');

        if(token){
            config.headers= {
                'x-access-token': `${token}`
            }
        }
        return config;
    },
    error => Promise.reject(error)
);
Axios.interceptors.response.use(
    response => response,
    error => {
      if (!error.response) {
      
       alert('Espere un momento 🙏🙏, los servicios no se encuentra en linea, regresa al inicio hasta que los servicios se activen')
      }
      else if(error.response.status===401||error.response.status===404) {//||error.response.status===401
        localStorage.removeItem('access_token');
       // window.location.reload(true);
      }
      
      return Promise.reject(error);
    }
  );

let url = 'http://localhost:3000'; 

export default{
    identityProxy: new IdentityProxy(Axios, url),
}