import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Plan } from 'src/app/model/plan.model';
import { LoginService } from 'src/app/services/login.service';
import { PlanService } from 'src/app/services/plan.service';
import { ReportService } from 'src/app/services/report.service';
import { InjectorService } from 'src/app/services/injector.service';
import { UserService } from 'src/app/services/user.service';
import { CommonsComponent } from '../commons/commons.component';
import { Vehicle } from 'src/app/model/vehicle.model';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends CommonsComponent implements OnInit{
 
  //@Output() injectorEvent = new EventEmitter<Injector[]>();
  //@Output() vehicleEvent  = new EventEmitter<Vehicle[]>();
  // @Output() planEvent   = new EventEmitter<Plan[]>();
  @Output() requestPlansEvent =  new EventEmitter();
  @Output() requestVehiclesEvent =  new EventEmitter();
  @Output() requestInjectorsEvent =  new EventEmitter();
  @Output() reportEvent = new EventEmitter<any>();

  constructor(
    private injectorService: InjectorService,
    private vehicleService: VehicleService,
    private planService: PlanService,
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


  
  //requestPlans() {
  //   this.planService.list().subscribe({
  //     next: list => {
  //       this.planEvent.emit(list);
  //     },
  //     error: err => {
  //       this.goToLink('/login', this.login, this.router);
  //     }
  //   })
   //}

  //requestVeiculos() {
  //   // this.vehicleService.list().subscribe(list => {
  //   //   this.vehicleEvent.emit(list);
  //   // })
  //}

  //requestInjectors() {
  //   // this.injectorService.list().subscribe(list => {
  //   //   this.injectorEvent.emit(list);
  //   // })
  //}

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
