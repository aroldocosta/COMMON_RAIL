import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vehicle } from '../model/vehicle.model';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  readonly baseUrl = environment.API_BASE_URL;

  constructor(private http: HttpClient, private login: LoginService) { }

  list() {
    const url = `${this.baseUrl}vehicles`;
    return this.http.get<Vehicle[]>(url, this.login.getHttpOptions());
  }

  get(id: number) {
    const url = `${this.baseUrl}vehicles/${id}`;
    return this.http.get<Vehicle>(url, this.login.getHttpOptions());
  }
  
  getByWorkshop(id: number) {
    const url = `${this.baseUrl}vehicles/workshop/${id}`;
    return this.http.get<Vehicle[]>(url, this.login.getHttpOptions());
  }

  create(vehicle: any): Observable<any> {
    const url = `${this.baseUrl}vehicles`;
    return this.http.post(url, vehicle, this.login.getHttpOptions());
  }

  update(vehicle: Vehicle): Observable<any> {
    const url = `${this.baseUrl}vehicles`;
    return this.http.put(url, vehicle, this.login.getHttpOptions());
  }

  remove(id: any): Observable<any> {
    const url = `${this.baseUrl}vehicles/${id}`;
    return this.http.delete(url, this.login.getHttpOptions());
  }
}
