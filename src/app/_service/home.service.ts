import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {


  //urlSevice: string = `${HOST_BACKEND}/api/encuestapersrespuesta`;
  urlSevice: string = `${api.domain_api}api/sys/v1`;
  urlSevice_proxy: string = `${api.domain_api_proxy}api/sys/v1`;


  constructor(private httpClient: HttpClient) { }

  getDemoResultDirect() {    
    let header = new HttpHeaders();
    this.createDefaultHeader(header);
    return this.httpClient.post<any>(
    `${this.urlSevice}/process/execute`, {},{
      headers: header
    });
  }

  getDemoResultProxy() {    
    let header = new HttpHeaders();
    this.createDefaultHeader(header);
    return this.httpClient.post<any>(
    `${this.urlSevice_proxy}/process/execute`, {}, {
      headers: header
    });
  }
  
  createDefaultHeader(headers: HttpHeaders) {
    headers.append('Access-Control-Allow-Origin', "*"); 
  }

}
