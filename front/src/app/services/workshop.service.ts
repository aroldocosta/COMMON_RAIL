import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Workshop } from '../model/workshop.model';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class WorkshopService {

  constructor(private http: HttpClient, private login: LoginService) { }

  readonly baseUrl = environment.API_BASE_URL;

  list(): Observable<Workshop[]> {
    const url = `${this.baseUrl}workshops`;
    return this.http.get<Workshop[]>(url, this.login.getHttpOptions());
  }

  get(id: string) {
    const url = `${this.baseUrl}workshops/${id}`;
    return this.http.get<Workshop>(url, this.login.getHttpOptions());
  }

  getByUserId(id: string) {
    const url = `${this.baseUrl}workshops/user/${id}`;
    return this.http.get<Workshop>(url, this.login.getHttpOptions());
  }

  create(workshop: any): Observable<any> {
    const url = `${this.baseUrl}workshops`;
    return this.http.post(url, workshop, this.login.getHttpOptions());
  }

  update(workshop: any): Observable<any> {
    const url = `${this.baseUrl}workshops`;
    return this.http.put(url, workshop, this.login.getHttpOptions());
  }

  remove(id: any): Observable<any> {
    const url = `${this.baseUrl}workshops/${id}`;
    return this.http.delete(url, this.login.getHttpOptions());
  }

  upload(id: any, file: File) {
    debugger
    const url = `${this.baseUrl}workshops/${id}/logo`;
    let formData = new FormData();
    formData.append("file", file)
    return this.http.post(url, formData, this.login.getHttpMultipartOptions());
  }

  download(id: string) {
    const url = `${this.baseUrl}workshops/${id}/logo`;
    return this.http.get(url, this.login.getHttpOptions());
  }
}