import { HttpClient } from '@angular/common/http';
export  class  APIService {
    API_URL  =  'http://127.0.0.1:5200/user/AAL';
    constructor(private  httpClient:  HttpClient) {}
    getContacts(){
        return  this.httpClient.get(`${this.API_URL}`);
    }
}