import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { registration } from '@app/_models/registration';
import { environment } from '@environments/environment';
//import configurl from '../../../assets/config/config.json';
@Injectable({ providedIn: 'root' })

export class RegistrationService {
//configurl.apiServer.url +
  //url =  'https://localhost:7042/api/registration';
  constructor(private http: HttpClient) {

   }
   getAll() {
        return this.http.get<registration[]>(`${environment.apiUrl}/registration`);
    }
  //  getRegistration(): Observable<Registration[]> {
  //   return this.http.get<Registration[]>(this.url + "/registration");
  //}
  postRegistration(registration: registration): Observable<registration> {
    const httpHeaders = { headers:new HttpHeaders({'Content-Type': 'application/json'}) };
    return this.http.post<registration>(`${environment.apiUrl}/registration`, registration, httpHeaders);
  } 
  
}