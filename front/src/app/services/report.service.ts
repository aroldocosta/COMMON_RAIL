import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  readonly baseUrl = environment.API_BASE_URL;

  constructor(private http: HttpClient, private login: LoginService) { }

  getByServiceOrder(serviceOrder: string): Observable<any> {
    const url = `${this.baseUrl}report/${serviceOrder}`;
    return this.http.get(url, this.login.getHttpOptions());
  }
}
