import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Plan } from '../model/plan.model';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  readonly baseUrl = environment.API_BASE_URL;

  constructor(private http: HttpClient, private login: LoginService) { }

  list() {
    const url = `${this.baseUrl}plans`;
    return this.http.get<Plan[]>(url, this.login.getHttpOptions());
  }

  get(id: string) {
    const url = `${this.baseUrl}plans/${id}`;
    return this.http.get<Plan>(url, this.login.getHttpOptions());
  }

  getByWorkshop(id: number) {
    const url = `${this.baseUrl}plans/workshop/${id}`;
    return this.http.get<Plan[]>(url, this.login.getHttpOptions());
  }
  
  create(plan: any): Observable<any> {
    const url = `${this.baseUrl}plans`;
    return this.http.post(url, plan, this.login.getHttpOptions());
  }

  update(plan: Plan): Observable<any> {
    const url = `${this.baseUrl}plans`;
    return this.http.put(url, plan, this.login.getHttpOptions());
  }

  remove(id: string): Observable<any> {
    const url = `${this.baseUrl}plans/${id}`;
    return this.http.delete(url, this.login.getHttpOptions());
  }

}
