import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Plan } from 'src/app/model/plan.model';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import { CommonsComponent } from '../commons/commons.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends CommonsComponent implements OnInit{
 
  @Output() requestPlansEvent =  new EventEmitter();
  @Output() requestVehiclesEvent =  new EventEmitter();
  @Output() requestInjectorsEvent =  new EventEmitter();
  @Output() reportEvent = new EventEmitter<any>();

  alertMessage = '';
  serviceOrder = '';
  injectorNumber = '';


  constructor(
    private userService: UserService,
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

  openReport() {
    this.router.navigateByUrl('report');
  }

  handleTestReport() {
    console.log("Gerar pdf")
    document.getElementById("serviceOrderReportModalToggleCloseModalButton")?.click();
    this.router.navigate(['report'], { state: {serviceOrder: this.serviceOrder }});
  }

  clearAlertMessage() {

  }
 
 

  requestReport(){
  //   this.reportService.report().subscribe(report => {
  //     this.reportEvent.emit(report);
  //   })
  }

  // openModalEvent() {
  //   this.modalEvent.emit();
  // }

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
