export default class IdentityProxy{

    constructor(axios,url){
    this.axios = axios;
    this.url =url;
    }

    register(params){
        return this.axios.post(this.url+'/auth/register',params)
    }

    login(params){ 
        return this.axios.post(this.url+'/auth/login',params)
    }

}