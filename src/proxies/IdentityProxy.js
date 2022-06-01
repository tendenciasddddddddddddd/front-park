export default class IdentityProxy{

    constructor(axios,url){
    this.axios = axios;
    this.url =url;
    }

    register(params){
        return this.axios.post(this.url+'/auth/signup',params)
    }

    login(params){ 
        return this.axios.post(this.url+'/auth/signin',params)
    }

    GoogleAuthApi(params){ 
        return this.axios.post(this.url+'/auth/GoogleAuthApis',params)
    }

    async queryUsers() {
        return await this.axios.get(this.url + '/users');
    }
}