import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Test } from '../model/test.model';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  readonly baseUrl = environment.API_BASE_URL;

  constructor(private http: HttpClient, private login: LoginService) { }

  list() {
    const url = `${this.baseUrl}tests`;
    return this.http.get<Test[]>(url, this.login.getHttpOptions());
  }

  get(id: number) {
    const url = `${this.baseUrl}tests/${id}`;
    return this.http.get<Test>(url, this.login.getHttpOptions());
  }
  
  getByWorkshop(id: number) {
    const url = `${this.baseUrl}tests/workshop/${id}`;
    return this.http.get<Test[]>(url, this.login.getHttpOptions());
  }
  
  create(test: Test): Observable<any> {
    const url = `${this.baseUrl}tests`;
    return this.http.post(url, test, this.login.getHttpOptions());
  }

  update(test: Test): Observable<any> {
    const url = `${this.baseUrl}tests`;
    return this.http.put(url, test, this.login.getHttpOptions());
  }

  remove(id: any): Observable<any> {
    const url = `${this.baseUrl}tests/${id}`;
    return this.http.delete(url, this.login.getHttpOptions());
  }
}
