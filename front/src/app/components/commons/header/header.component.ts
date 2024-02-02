import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ReportService } from 'src/app/services/report.service';
import { UserService } from 'src/app/services/user.service';
import { WorkshopService } from 'src/app/services/workshop.service';
import { CommonPageComponent } from '../common-page/common-page.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends CommonPageComponent implements OnInit{
 
  @Output() reportEvent = new EventEmitter<any>();
  @Output() requestUsersEvent = new EventEmitter();
  @Output() requestPlansEvent = new EventEmitter();
  @Output() requestVehiclesEvent = new EventEmitter();
  @Output() requestInjectorsEvent = new EventEmitter();
  @Output() requestWorkshopsEvent = new EventEmitter();

  serviceOrder = this.test.serviceOrder;
  injectorNumber = '';
  logoImagePath: string = "";
  
  constructor(
    private userService: UserService,
    private router: Router,
    private login: LoginService,
    private workshopService: WorkshopService) {
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
  
  ngOnChanges() {
    if(this.workshop.id) {
      this.logoImagePath = "assets/img/logos/" + this.workshop.logo;
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

  emitRequestWorkshopsEvent() {
    this.requestWorkshopsEvent.emit();
  }

  openReport() {
    this.router.navigateByUrl('report');
  }

  handleServiceOrderReport() {
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

  download(id: string) {
    this.workshopService.download(id).subscribe({
      next: resp => {
        console.log(resp);
      },
      error: err => {
        console.log(err);
      }
    })
    console.log("download");
  }

}
