import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Injector } from '../model/injector.model';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class InjectorService {

  readonly baseUrl = environment.API_BASE_URL;

  constructor(private http: HttpClient, private login: LoginService) { }

  list() {
    const url = `${this.baseUrl}injectors`;
    return this.http.get<Injector[]>(url, this.login.getHttpOptions());
  }

  get(id: string) {
    const url = `${this.baseUrl}injectors/${id}`;
    return this.http.get<Injector>(url, this.login.getHttpOptions());
  }
  
  create(injector: any): Observable<any> {
    const url = `${this.baseUrl}injectors`;
    return this.http.post(url, injector, this.login.getHttpOptions());
  }

  update(injector: Injector): Observable<any> {
    const url = `${this.baseUrl}injectors`;
    return this.http.put(url, injector, this.login.getHttpOptions());
  }

  remove(id: any): Observable<any> {
    const url = `${this.baseUrl}injectors/${id}`;
    return this.http.delete(url, this.login.getHttpOptions());
  }
}
