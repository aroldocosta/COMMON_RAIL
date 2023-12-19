import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Plan } from 'src/app/model/plan.model';
import { Test } from 'src/app/model/test.model';
import { LoginService } from 'src/app/services/login.service';
import { ReportService } from 'src/app/services/report.service';
import { UserService } from 'src/app/services/user.service';
import { CommonsComponent } from '../commons/commons.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends CommonsComponent implements OnInit{
 
  @Output() reportEvent = new EventEmitter<any>();
  @Output() requestUsersEvent = new EventEmitter();
  @Output() requestPlansEvent = new EventEmitter();
  @Output() requestVehiclesEvent = new EventEmitter();
  @Output() requestInjectorsEvent = new EventEmitter();

  serviceOrder = this.test.serviceOrder;
  injectorNumber = '';

  constructor(
    private userService: UserService,
    private reportService: ReportService,
    private router: Router,
    private login: LoginService) {
      super();
  }

  ngOnInit(): void {
    
    const userId = this.login.getAuthId();

    if(this.login.getAuthData() != null) {
      this.userService.get(userId).subscribe({
        next: user => {
          this.logged = user;
        },
        error: err => {
          this.login.setAuthData(null);
          this.goToLink('/login', this.login, this.router);
        }
      })
    } else {
      this.login.setAuthData(null);
      this.goToLink('/login', this.login, this.router);
    }
  }

  emitRequestPlansEvent() {
    this.requestPlansEvent.emit();
  }

  emitRequestVehiclesEvent() {
    this.requestVehiclesEvent.emit();
  }

  emitRequestInjectorsEvent() {
    this.requestInjectorsEvent.emit();
  }

  emitRequestUsersEvent() {
    this.requestUsersEvent.emit();
  }

  openReport() {
    this.router.navigateByUrl('report');
  }

  handleServiceOrderReport() {
    console.log("Gerar pdf")
    this.router.navigate(['report'], { state: {serviceOrder: this.test.serviceOrder, report: 'service-order' }});
  }

  handleInjectorNumberReport() {
    this.router.navigate(['report'], { state: {serviceOrder: this.test.serviceOrder, injectorNumber: this.test.injectorNumber, report: 'injector-number' }});
  }

  clearAlertMessage() {

  }
 

  getId() {
    return this.login.getAuthId();
  }

  getToken() {
    return this.login.getAuthToken();
  }


  override isAuthenticated() {
    return this.login.isAuthenticated();
  }

  loginForm() {
     this.goToLink("/login", this.login, this.router);
  }

  logout() {
     this.goToLink("/logout", this.login, this.router);
  }

  userData() {

  }
}
