import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Test } from 'src/app/model/test.model';
import { Plan } from 'src/app/model/plan.model';
import { LoginService } from 'src/app/services/login.service';
import { PlanService } from 'src/app/services/plan.service';
import { formatNumber} from '@angular/common';
import { InjectorService } from 'src/app/services/injector.service';
import { TestService } from 'src/app/services/test.service';
import { VehicleService } from 'src/app/services/vehicle.service';
import { Injector } from 'src/app/model/injector.model';
import { Vehicle } from 'src/app/model/vehicle.model';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user.model';
import { Router } from '@angular/router';
import { Workshop } from 'src/app/model/workshop.model';
import { WorkshopService } from 'src/app/services/workshop.service';
import { TopMessageComponent } from 'src/app/components/commons/top-message/top-message.component';
import { AsideComponent } from 'src/app/components/commons/aside/aside.component';
import { CommonPageComponent } from 'src/app/components/commons/common-page/common-page.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends CommonPageComponent implements OnInit{

  @ViewChild(TopMessageComponent) topMessage?: TopMessageComponent;
  @ViewChild(AsideComponent) aside: any
  @Input() injectorList: Injector[] = [];
  @Input() workshopList: Workshop[] = [];
  @Input() vehicleList: Vehicle[] = [];
  @Input() planList: Plan[] = [];
  @Input() userList: User[] = [];

  report: any = 'Aguarde...';
  testPayment = '';
  testPlanId = '';
  testInjectorId = '';
  testDate = '';
  testQuantity = '0';
  filteredList: Test[] = [];
  enabledDateIni: boolean = true;
  enabledDateEnd: boolean = true;
  filteredField = '';
  filteredDateIni: string = '';
  filteredDateEnd: string = '';
  filteredDate: string = '';
  filteredInjectorNumber: string = '';
  filteredTest: any;
  filteredVehicle: string = 'ALL';
  filteredInjector: string = 'ALL';
  filteredInjectorModel: string = '';
  filteredVechiclePlate: string = '';
  filteredCustomer: string = '';
  filteredServiceOrder: string = '';
  removingName: string = '';
  removingEvent: any;
  removingObjects: string = '';
  removingAlertTopTitle: string = '';
  removingAlertMessage01: string = '';
  removingAlertMessage02: string = '';
  currentModalLink: string = '';
  serviceOrder: string = '';
  currentWorkshop: any;

  tabIndex = 0;
  currentTab: any = {id:'med_electric', heading: 'MED ELETRICAS'};
  tabList = [
    {id:'med_electric',   heading: 'MED ELETRICAS'},
    {id:'half_load',      heading: 'CARGA PARCIAL'},
    {id:'idling',         heading: 'MARCHA LENTA'},
    {id:'full_load',      heading: 'PLENA CARGA'},    
    {id:'pre_injection',  heading: 'PRE INJEÇÃO'},
    {id:'comments',       heading: 'OBSERVAÇÕES'},
  ];

  constructor(
    private router: Router,
    private login: LoginService,
    private userService: UserService,
    private testService: TestService,      
    private planService: PlanService,
    private vehicleService: VehicleService,
    private injectorService: InjectorService,
    private workshopService: WorkshopService
    ) {
      super();
  }

  ngOnInit(): void {
    if(this.login.getAuthData() != null) {
      const userId = this.login.getAuthId();  
      this.userService.getWorkshop(userId).subscribe({ 
        next: workshop => {
          this.currentWorkshop = workshop;
          this.requestUsers();
          this.requestTests();
          this.requestPlans();
          this.requestVehicles();
          this.requestInjectors();
          this.filteredDateIni = this.getFormattedDate(new Date());
          this.filteredDateEnd = this.getFormattedDate(new Date()); 
          this.test.planId = '0';
          this.test.vehiclePlate = '0';
          this.test.injectorModel = '0';
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

  /* ---------------- Remove Command Button Handlers ----------------- */
  cancelRemoveCommandButton() {
    this.testCommand = 'listing';
    this.testCommandButton = "NOVO TESTE";
    this.modalCommand = 'listing';
    this.modalCommandButton = "NOVO";  
    document.getElementById('removeCloseModalButton')?.click(); 

    if(this.currentModalLink.length > 0) {
      document.getElementById(this.currentModalLink)?.click();
    }   
  }

  /* ---------------- Test Command Button Handlers ----------------- */
  handleTestCommandButton() {
    let button = 'NOVO';
    let command = 'listing';
    if(this.testCommand == 'listing') {
      button = 'SALVAR';
      command = 'creating';
      this.test = new Test();
      this.requestPlans();
      this.requestVehicles();
      this.requestInjectors();
    } else if(this.testCommand == 'creating') {
      this.topMessage?.setAlertMessage("Criando teste..", this.topMessage.SUCCESS, 600);
      command = 'editing';
      button = 'SALVAR';
      this.saveTest();
      this.requestTests();
    } else if(this.testCommand == 'editing') {
      this.topMessage?.setAlertMessage("Salvando dados do teste..", this.topMessage.SUCCESS, 600);
      command = 'editing';
      button = 'SALVAR';
      this.updateTest();
      this.requestTests();
    }
    this.testCommand = command;
    this.testCommandButton = button;
  }

  cancelTestCommandButton() {
    this.testCommand = 'listing';
    this.testCommandButton = 'NOVO TESTE';
    this.requestTests();
  }

  /* ---------------- Plan Command Button Handlers ----------------- */
  handlePlanCommandButton() { 
    if(this.modalCommand == 'listing') {
      this.modalCommand = 'creating';
      this.modalCommandButton = 'SALVAR';
      this.plan = new Plan();
    } else if(this.modalCommand == 'creating') {
      this.savePlan();
    } else if(this.modalCommand == 'editing') {
      this.updatePlan();
    }
  }

  cancelPlanCommandButton() {
    if(this.modalCommand == 'listing') {
      document.getElementById('planModalCloseButton')?.click();
      this.currentModalLink = '';
    } else {
      this.modalCommand = 'listing';
      this.modalCommandButton = 'NOVO'
    }
  }

  /* -------------- Vehicle Command Button Handlers --------------- */
  handleVehicleCommandButton() {   
    if(this.modalCommand == 'listing') {
      this.modalCommand = 'creating';
      this.modalCommandButton = 'SALVAR';
      this.vehicle = new Vehicle();
    } else if(this.modalCommand == 'creating') {
      this.saveVehicle();
    } else if(this.modalCommand == 'editing') {
      this.updateVehicle();
    }
  }

  cancelVehicleCommandButton() {
    if(this.modalCommand == 'listing') {
      document.getElementById('vehicleModalCloseButton')?.click();
      this.currentModalLink = '';
    } else {
      this.modalCommand = 'listing';
      this.modalCommandButton = 'NOVO'
    }
  }

  /* ------------ User Command Button Handlers ------------- */
  handleUserCommandButton() {
    if(this.modalCommand == 'listing') {
      this.modalCommand = 'creating';
      this.modalCommandButton = 'SALVAR';
      this.user = new User();
      this.requestWorkshops();
    } else if(this.modalCommand == 'creating') {
      this.saveUser();
      this.requestUsers();
    } else if(this.modalCommand == 'editing') {
      this.updateUser();
      this.requestUsers();
    }
  }

  cancelUserCommandButton() {
    if(this.modalCommand == 'listing') {
      document.getElementById('userModalCloseButton')?.click();
      this.currentModalLink = '';
    } else {
      this.modalCommand = 'listing';
      this.modalCommandButton = 'NOVO'
    }
  }
  /* ------------ Injector Command Button Handlers ------------- */
  handleInjectorCommandButton() {
    if(this.modalCommand == 'listing') {
      this.modalCommand = 'creating';
      this.modalCommandButton = 'SALVAR';
      this.injector = new Injector();
      this.requestPlans();
    } else if(this.modalCommand == 'creating') {
      this.saveInjector();
    } else if(this.modalCommand == 'editing') {
      this.updateInjector();
    }
  }

  cancelInjectorCommandButton() {
    if(this.modalCommand == 'listing') {
      document.getElementById('injectorModalCloseButton')?.click();
      this.currentModalLink = '';
    } else {
      this.modalCommand = 'listing';
      this.modalCommandButton = 'NOVO'
    }
  }
  /* ------------ Workshop Command Button Handlers ------------- */
  handleWorkshopCommandButton() {
    if(this.modalCommand == 'listing') {
      this.modalCommand = 'creating';
      this.modalCommandButton = 'SALVAR';
      this.workshop = new Workshop();
    } else if(this.modalCommand == 'creating') {
      this.saveWorkshop();
    } else if(this.modalCommand == 'editing') {
      this.updateWorkshop();
    }
  }

  cancelWorkshopCommandButton() {
    if(this.modalCommand == 'listing') {
      document.getElementById('workshopModalCloseButton')?.click();
      this.currentModalLink = '';
    } else {
      this.modalCommand = 'listing';
      this.modalCommandButton = 'NOVO'
    }
  }
  /*------------------------------------------------------------*/

  /* ---------------- Confirm Remove Button Handlers ----------------- */
  handleTestRemoveConfirm(test: Test) {
    this.testService.remove(test.id).subscribe({
      next: resp => {
        this.testCommand = 'listing';
        this.testCommandButton = 'NOVO TESTE';
        document.getElementById("removeCloseModalButton")?.click();
        this.requestTests();      
      },
      error: err => {
        console.log("Error: ", err);
      }
    }) 
  }

  handleModalRemoveConfirm() {
    let currentMenulink: any;
    let currentService: any;

    let objectId = this.removingEvent.object.id;
    let objectClass = this.removingEvent.objClass;
 
    if(objectClass == 'Plan') {
      currentService = <PlanService>this.planService;
      currentMenulink = document.getElementById("planMenuLink");
    } else if(objectClass == 'Test') {
      this.handleTestRemoveConfirm(this.removingEvent.object);
      return;
    } else if(objectClass == 'Vehicle') {
      currentMenulink = document.getElementById("vehicleMenuLink");
      currentService = <VehicleService>this.vehicleService;
    } else if(objectClass == 'Injector') {
      currentMenulink = document.getElementById("injectorMenuLink");
      currentService = <InjectorService>this.injectorService;
    } else if(objectClass == 'User') {
      currentMenulink = document.getElementById("userMenuLink");
      currentService = <UserService>this.userService;
    } else if(objectClass == 'Workshop') {
      currentMenulink = document.getElementById("workshopMenuLink");
      currentService = <WorkshopService> this.workshopService;
    }

    currentService.remove(objectId).subscribe({
      next: (resp: any) => {
        document.getElementById("removeCloseModalButton")?.click();
        currentMenulink?.click();
        this.modalCommand = 'listing';
        this.modalCommandButton = "NOVO";
      },
      error: (err: any) => {
        this.alertMessage = "Ação não permitida, entre em contato com a gerência."
      }
    });
  }
/*--------------------------------------------------------------*/

  setReportFile(report: any) {
    const file = new Blob([report], {
      type: report.type
    });

    const blob = window.URL.createObjectURL(file);

    const link = document.createElement('a');
    link.href = blob;
    link.download = 'report.pdf';
    link.click();

    window.URL.revokeObjectURL(blob);
    link.remove();
  }

  isFilteredDate(date: string) {    
    let dateValues = date.split('T')[0].split('-');
    let filteredDateIni = this.filteredDateIni.split('-');
    let filteredDateEnd = this.filteredDateEnd.split('-');
    let d_yea_tst = Number(dateValues[0]);
    let d_mon_tst = Number(dateValues[1]);
    let d_day_tst = Number(dateValues[2]);
    let f_yea_ini = Number(filteredDateIni[0]);
    let f_mon_ini = Number(filteredDateIni[1]);
    let f_day_ini = Number(filteredDateIni[2]);
    let f_yea_end = Number(filteredDateEnd[0]);
    let f_mon_end = Number(filteredDateEnd[1]);
    let f_day_end = Number(filteredDateEnd[2]);

    if(!this.enabledDateIni) f_yea_ini = Number.NEGATIVE_INFINITY;
    if(!this.enabledDateEnd) f_yea_end = Number.POSITIVE_INFINITY;

    if(d_yea_tst < f_yea_ini || d_yea_tst > f_yea_end) { 
      return false;
    } else if(d_mon_tst < f_mon_ini || d_mon_tst > f_mon_end) {
      return false;
    } else if(d_day_tst < f_day_ini || d_day_tst > f_day_end) {
      return false;
    } 
  
    return true;
  }

  filterTest() {
    // this.filteredList = this.testList.filter(f => 
    //   (f.planName == this.filteredPlans[0].planName  ||
    //    f.planName == this.filteredPlans[1].planName  ||
    //    f.planName == this.filteredPlans[2].planName  ||
    //    f.planName == this.filteredPlans[3].planName) &&
    //   (this.isFilteredDate(f.date) || this.enabledDate) &&
    //   (f.injectorName == this.filteredInjector || this.filteredInjector == 'ALL') 
    // );
  }
  
  // --------------------------------------------------------
  handlePlanLinkEvent() {
    this.currentModalLink = 'planMenuLink';
    this.requestPlans();
  }

  requestPlans() {
    
    this.planService.list().subscribe({
      next: list => {
        this.planList = list;
      }
    })
  }

  handleVehicleLinkEvent() {
    this.currentModalLink = 'planMenuLink';
    this.requestVehicles();
  }

  requestVehicles() {
    this.currentModalLink = 'vehicleMenuLink';
    this.vehicleService.list().subscribe({
      next: list => {
        this.vehicleList = list;
      }
    })
  }

  handleInjectorLinkEvent() {
    this.currentModalLink = 'planMenuLink';
    this.requestInjectors();
  }

  requestInjectors() {
    this.currentModalLink = 'injectorMenuLink';
    this.injectorService.list().subscribe({
      next: list => {
        this.injectorList = list;
      },
      error: err => {
        console.log("Error: ", err)
      }
    })
  }

  handleUserLinkEvent() {
    this.currentModalLink = 'userMenuLink';
    this.requestUsers();
  }

  requestUsers() {
    this.userService.list().subscribe({
      next: list => {
        this.userList = list;
      }
    })
  }

  handleWorkshopLinkEvent() {
    this.currentModalLink = 'WorkshopMenuLink';
    this.requestWorkshops();
  }

  requestWorkshops() {
    this.workshopService.list().subscribe({
      next: list => {
        this.workshopList = list;
      },
      error: err => {
        console.log("Error: ", err);
      }
    });
  }

  // --------------------------------------------------------


  handleTestReport() {
    this.router.navigateByUrl('report');
  }

  showNotImplementedAlert() {
    this.alertMessage = 'Função ainda não implementada neste MVP!';
  }

  clearAlertMessage() {
    this.alertMessage = '';
  }

  appyCurrencyMask(inputValue: string) {
    inputValue = inputValue.replaceAll('.', '');
    inputValue = inputValue.replaceAll(',', '');
    let value = Number(inputValue)/100;
    return formatNumber(value, 'pt-BR', '1.2-2');
  }

  appyNumberMask(input: string, mask: string) {
    input = input.replaceAll('.', '');
    input = input.replaceAll(',', '');
    let value = Number(input)/100;
    return formatNumber(value, 'pt-BR', mask);
  }

  getFormattedDate(date: Date) {
    let yea = date.getFullYear();
    let mon = (date.getMonth() > 8) ? ( '' + ( date.getMonth() + 1 )) : ( '0' + (date.getMonth() + 1));
    let day = (date.getDate() > 9)  ? ( '' + ( date.getDate()      )) : ( '0' + (date.getDate()     ));
    return `${yea}-${mon}-${day}`;
  }

  saveTest() {
    let today = new Date();
    this.test.date = this.getFormattedDate(today);
    this.test.workshop = this.currentWorkshop;
    this.testService.create(this.test).subscribe({
      next: resp => {
        //document.getElementById("newCloseModalButton")?.click();
        this.requestTests();
      },
      error: err => {
        console.log("Error: ", err);
      }
    })
  }

  updateTest() { 
    this.test.workshop = this.currentWorkshop;
    this.testService.update(this.test).subscribe({
      next: resp => {
        this.handleTabbingTestEvent(this.currentTab);
        this.requestTests();
      },
      error: err => {
        this.alertMessage = "Ação não permitida, entre em contato com a gerência."
      }
    })
  }

  savePlan() {
     return this.planService.create(this.plan).subscribe({
      next: resp => {
        this.planService.list().subscribe({
          next: list => {
            this.planList = list;
            this.modalCommand = 'listing';
            this.modalCommandButton = 'NOVO';
          }
        })
      },
      error: err => {
        console.log("Error: " + typeof(err.status));
        if(err.status == 401) {
          this.alertMessage = 'Ação não permitida, entre em contato com a gerência.'
          console.log("Alert Message: " + this.alertMessage);
        } else if(err.status == 409) {
          this.alertMessage = 'Erro: Código Já cadastrado!'
        }                              
      }
    })
  }

  updatePlan() {
    this.planService.update(this.plan).subscribe({
      next: resp => {
        this.planService.list().subscribe({
          next: list => {
            this.planList = list;
            this.modalCommand = 'listing';
            this.modalCommandButton = 'NOVO';
          }
        })
      },
      error: err => {
        console.log("Error: ", err);
        if(err.status == 401) {
          this.alertMessage = 'Ação não permitida, entre em contato com a gerência.'
          console.log("Alert Message: " + this.alertMessage);
        } else if(err.status == 409) {
          this.alertMessage = 'Erro: Código Já cadastrado!'
        }
      }
    })
  }

  saveVehicle() {
    this.vehicleService.create(this.vehicle).subscribe({
      next: resp => {
        this.vehicleService.list().subscribe({
          next: list => {
            this.vehicleList = list;
            this.modalCommand = 'listing';   
            this.modalCommandButton = 'NOVO';
          }
        })
      },
      error: err => {
        console.log("Error: ", err);
        if(err.status == 401) {
          this.alertMessage = 'Ação não permitida, entre em contato com a gerência.'
        } else if(err.status == 409) {
          this.alertMessage = 'Erro: Placa já cadastrada!'
        }
      }
    })
  }

  updateVehicle() {
    this.vehicleService.update(this.vehicle).subscribe({
      next: resp => {
        this.vehicleService.list().subscribe({
          next: list => {
            this.vehicleList = list;
            this.modalCommand = 'listing';
            this.modalCommandButton = 'NOVO';
          }
        })
      },
      error: err => {
        console.log("Error: ", err);
        if(err.status == 401) {
          this.alertMessage = 'Ação não permitida, entre em contato com a gerência.'
        } else if(err.status == 409) {
          this.alertMessage = 'Erro: Placa já cadastrada!'
        }
      }
    })
  }

  saveInjector() {
    this.injectorService.create(this.injector).subscribe({
      next: resp => {
        this.injectorService.list().subscribe({
          next: list => {
            this.injectorList = list;
            this.modalCommand = 'listing';
            this.modalCommandButton = 'NOVO';
          }
        })
      },
      error: err => {      
        console.log("Error: ", err);
        if(err.status == 401) {
          this.alertMessage = 'Ação não permitida, entre em contato com a gerência.'
        } else if(err.status == 409) {
          this.alertMessage = 'Erro: Modelo já cadastrado!'
        }
      }
    })
  }

  updateInjector() {
    this.injectorService.update(this.injector).subscribe({
      next: resp => {
        this.injectorService.list().subscribe({
          next: list => {
            this.injectorList = list;
            this.modalCommand = 'listing';   
            this.modalCommandButton = 'NOVO';
          }
        })
      },
      error: err => {
        console.log("Error: ", err);
        if(err.status == 401) {
          this.alertMessage = 'Ação não permitida, entre em contato com a gerência.'
        } else if(err.status == 409) {
          this.alertMessage = 'Erro: Modelo já cadastrado!'
        }
      }
    })
  }

  saveUser() {
    this.userService.create(this.user).subscribe({
      next: resp => {
        this.userService.list().subscribe({
          next: list => {
            this.userList = list;
            this.modalCommand = 'listing';
            this.modalCommandButton = 'NOVO';
          }
        })
      },
      error: err => {
        console.log("Error: ", err);
        if(err.status == 401) {
          this.alertMessage = 'Ação não permitida, entre em contato com a gerência.'
        } else if(err.status == 409) {
          this.alertMessage = 'Erro: Login já cadastrado!'
        }
      }
    })
  }

  updateUser() {
    
    this.userService.update(this.user).subscribe({
      next: resp => {
        
        this.userService.list().subscribe({
          next: list => {
            
            this.userList = list;
            this.modalCommand = 'listing';
            this.modalCommandButton = 'NOVO';
          }
        })
      },
      error: err => {
        console.log("Error: ", err);
        
        if(err.status == 401) {
          this.alertMessage = 'Ação não permitida, entre em contato com a gerência.'
        } else if(err.status == 409) {
          this.alertMessage = 'Erro: Login já cadastrado!'
        }
      }
    })
  }

  saveWorkshop() {
    this.workshopService.create(this.workshop).subscribe({
      next: resp => {
        this.workshopService.list().subscribe({
          next: list => {
            this.workshopList = list;
            this.modalCommand = 'listing';
            this.modalCommandButton = 'NOVO';
          }
        })
      },
      error: err => {      
        console.log("Error: ", err);
        if(err.status == 401) {
          this.alertMessage = 'Ação não permitida, entre em contato com a gerência.'
        } else if(err.status == 409) {
          this.alertMessage = 'Erro: Oficina já cadastrada!'
        }
      }
    })
  }

  updateWorkshop() {
    this.workshopService.update(this.workshop).subscribe({
      next: resp => {
        this.workshopService.list().subscribe({
          next: list => {
            this.workshopList = list;
            this.modalCommand = 'listing';   
            this.modalCommandButton = 'NOVO';
          }
        })
      },
      error: err => {
        console.log("Error: ", err);
        if(err.status == 401) {
          this.alertMessage = 'Ação não permitida, entre em contato com a gerência.'
        } else if(err.status == 409) {
          this.alertMessage = 'Erro: Oficina já cadastrada!'
        }
      }
    })
  }

  view(formData: FormData) {

  }

  requestTests() {
    this.currentModalLink = '';
    let workshopId = this.currentWorkshop.id;
    this.testService.getByWorkshop(workshopId).subscribe({
      next: list => {        
        this.testList = list;

        this.filteredList = this.testList.sort((a, b) => {
          if(a.serviceOrder  == b.serviceOrder) {
            return a.injectorNumber - b.injectorNumber;
          } 
          return a.serviceOrder > b.serviceOrder ?  -1 : 1;
        });
        this.doTestFieldFilters();
      }
    });
  }

  // doTestFilter() {
  //   this.filteredList = this.testList
  //     .filter(t => t.sequence == this.filteredSequence)
  //     .filter(t => t.date == this.filteredDateTest)
  //     .filter(t => t.injectorId == this.filteredInjector)
  //     .filter(t => t.vehiclePlate == this.filteredVehicle)
  //     .filter(t => t.serviceOrder == this.filteredServiceOrder);
  // }

  clearTestFilterFields() {
    this.filteredInjectorNumber = '';
    this.filteredCustomer = '';
    this.filteredDate = '';
    this.filteredInjectorModel = '';
    this.filteredInjectorModel = '';
    this.filteredServiceOrder = '';
  }

  doTestFieldFilters() {
    if(this.filteredField !== '') {
      this.doTestDateFilter();
      this.doTestVehicleFilter();
      this.doTestInjectorFilter();      
      this.doTestInjectorFilter();
      this.doCustomerFilter(this.filteredCustomer);
      this.doTestFilteredOrderFilter();
      this.doInjectorNumberFilter(this.filteredInjectorNumber);
    }
  }

  doTestCombinedFilter() {

  }

  doInjectorNumberFilter(injectorNumber: string) {
    this.filteredInjectorNumber = injectorNumber;
    if(this.filteredInjectorNumber != '') {
      this.filteredField = 'injectorNumber';
      this.filteredList = this.testList
        .filter(t => t.injectorNumber == Number(this.filteredInjectorNumber));
      document.getElementById("injectorNumberFilterCloseModalButton")?.click();    
    }                               
  }

  doCustomerFilter(customer: string) {
    debugger
    this.filteredCustomer = customer;
    if(this.filteredCustomer != '') {
      this.filteredField = 'customer';
      this.filteredList = this.testList
        .filter(t => t.customerName == this.filteredCustomer);
      document.getElementById("customerFilterCloseModalButton")?.click(); 
    } 
  }
 
  doTestDateFilter() {
    if(this.filteredDate != '') {
      this.filteredField = 'date';
      this.filteredList = this.testList
        .filter(t => t.date == this.filteredDate);
      document.getElementById("dateFilterCloseModalButton")?.click();  
    }
  }

  doTestInjectorFilter() {
    if(this.filteredInjectorModel != '') {
      this.filteredField = 'injectorModel';
      this.filteredList = this.testList
      .filter(t => t.injectorModel == this.filteredInjectorModel)
      document.getElementById("injectorFilterCloseModalButton")?.click(); 
    }
  }

  doTestVehicleFilter() {
    if(this.filteredVechiclePlate != '') {
      this.filteredField = 'vehicle';
      this.filteredList = this.testList
      .filter(t => t.vehiclePlate == this.filteredVechiclePlate);
      document.getElementById("vehicleFilterCloseModalButton")?.click(); 
    }
  }

  doTestFilteredOrderFilter() {
    if(this.filteredServiceOrder != '') {
      this.filteredField = 'serviceOrder';
      this.filteredList = this.testList
      .filter(t => t.serviceOrder == this.filteredServiceOrder)
      .sort((a, b) => a.injectorNumber - b.injectorNumber)
      document.getElementById("serviceOrderFilterCloseModalButton")?.click(); 
    }
  }

  handleTestCommandEvent(event: any) {  
    this.testCommand = event.command;
    if(event.command == 'editing') {
      this.testService.get(event.object.id).subscribe({
        next: test => {
          this.test = test;
          this.plan = test.plan
          this.testCommandButton = 'SALVAR';
          this.aside.setCurrentTab(this.currentTab, this.test, this.plan, this.injector);
        },
        error: err => {
          console.log("Error: ", err);
        }
      })
    } else if(event.command == 'removing') {
      this.removingObjects = '';
      this.removingEvent = event;
      this.removingAlertMessage01 = `Deseja remover o teste da OS ${event.object.serviceOrder}, 
      injetor ${event.object.injectorNumber} e sequência ${event.object.sequence}`  
      this.removingAlertTopTitle = "REMOVER TESTE";
    }
  }

  handlePlanCommandEvent(event: any) {  
    this.modalCommand = event.command;
    if(event.command == 'editing') {
      this.modalCommandButton = 'SALVAR';
      this.plan = event.object;
    } else if(event.command == 'removing') {
        this.injectorService.getByPlanId(event.object.id).subscribe({
          next: list => {
            this.removingObjects = '';
            list.forEach(i => this.removingObjects += i.model + ", ");
            this.removingObjects = this.removingObjects.substring(0, this.removingObjects.lastIndexOf(","));
            this.removingName = event.object.code;
            this.removingEvent = event;
            this.removingAlertMessage01 = "Deseja remover o plano" 
            this.removingAlertMessage02 = "Esta ação também removerá o(s) injetor(es) a seguir: ";
            this.removingAlertTopTitle = "REMOVER PLANO";
          }
        })
    }
  }

  
  handleVehicleCommandEvent(event: any) {  
    if(event.command == 'editing') {
      this.vehicleService.get(event.object.id).subscribe({
        next: vehicle => {
          this.vehicle = vehicle;
          this.modalCommand = event.command;
          this.modalCommandButton = 'SALVAR';
        },
        error: err => {
          this.alertMessage = err.status + ": " + err.message;
        }
      })
    } else if(event.command == 'removing') {
      this.removingObjects = ''; 
      this.removingName = event.object.plate;
      this.removingEvent = event;
      this.removingAlertMessage01 = "Deseja remover o veículo ";
      this.removingAlertTopTitle = "REMOVER VEÍCULO";
    }
  }

  handleInjectorCommandEvent(event: any) {  
    if(event.command == 'editing') {
      this.modalCommand = event.command;
      this.modalCommandButton = 'SALVAR';
      this.injector = event.object;
    } else if(event.command == 'removing') {
      this.removingObjects = '';
      this.removingName = event.object.model;
      this.removingEvent = event;
      this.removingAlertMessage01 = "Deseja remover o injetor ";
      this.removingAlertTopTitle = "REMOVER INJETOR";
    }
  }

  handleUserCommandEvent(event: any) {  
    if(event.command == 'editing') {
      this.modalCommand = event.command;
      this.modalCommandButton = 'SALVAR';
      this.user = event.object;
      this.requestWorkshops();
    } else if(event.command == 'removing') {
      this.removingObjects = '';
      this.removingName = event.object.name;
      this.removingEvent = event;
      this.removingAlertMessage01 = "Deseja remover o usuário ";
      this.removingAlertTopTitle = "REMOVER USUÁRIO";
    }
  }

  handleWorkshopCommandEvent(event: any) {
    this.modalCommand = event.command;
    if(event.command == 'editing') {
      this.modalCommandButton = 'SALVAR';
      this.workshop = event.object;
    } else if(event.command == 'removing') {
      this.userService.getByWorkshopId(event.object.id).subscribe({
        next: list => {          
          this.removingObjects = '';
          list.forEach(i => this.removingObjects += i.name + ", ");
          this.removingObjects = this.removingObjects.substring(0, this.removingObjects.lastIndexOf(","));
          this.removingName = event.object.name;
          this.removingEvent = event;
          this.removingAlertMessage01 = "Deseja remover a oficina" 
          this.removingAlertMessage02 = "Esta ação também removerá o(s) usuário(s) a seguir: ";
          this.removingAlertTopTitle = "REMOVER OFICINA";
        },
        error: err => {          
          console.log("Erros: ", err);
        }
      })
    }
  }

  handleArrowEvent(arrow: string) {
    if(arrow == 'right') {
      this.tabIndex++;
      if(this.tabIndex >= this.tabList.length) this.tabIndex = 0;
      this.handleTabbingTestEvent(this.tabList[this.tabIndex]);
    } else if(arrow == 'left') {
      this.tabIndex--;
      if(this.tabIndex < 0) this.tabIndex = this.tabList.length - 1;
      this.handleTabbingTestEvent(this.tabList[this.tabIndex]);
    }
  }

  handleTabbingTestEvent(tab: any) {
    this.currentTab = tab;
    this.aside.setCurrentTab(this.currentTab, this.test, this.plan, this.injector);
  }

  handleUpdateTestEvent(test: Test) {
    this.test = test;  
    this.handleTabbingTestEvent(this.currentTab);
  }

  handleUpdateTestPlanEvent(test: Test) {
    this.test = test; 
    let planId = this.test.planId;
    
    this.planService.get(planId).subscribe({
      next: plan => {
        this.plan = plan;
        let planType = (this.plan != null) ? this.plan.type : '';
        let injectorType = (this.injector != null) ? this.injector.type : '';
        let injectorTypeSelected = (this.injector != null && this.injector.type.length > 0);

        if(injectorTypeSelected && planType != injectorType) {
          this.topMessage?.setAlertMessage("ATENÇÃO: Tipo de plano e tipo de injetor são diferentes!", this.topMessage.WARNING, 3000);
        }
        this.handleTabbingTestEvent(this.currentTab);
      },
      error: err => {
        console.log("Error: ", err);
      }
    });
  }

  handleUpdateTestInjectorEvent(test: Test) {
    this.test = test;
    let injectorId = this.test.injectorId;
    
    this.injectorService.get(injectorId).subscribe({
      next: injector => {
        this.injector = injector;
        this.test.planId = injector.planId;
        this.planService.get(injector.planId).subscribe({
          next: plan => {
            this.plan = plan;
            this.currentTab = {id:'med_electric', heading:  'MED ELETRICAS'};
            this.handleTabbingTestEvent(this.currentTab);
          }
        })
      },
      error: err => {
        console.log("Error: ", err)
      }
    }) 
  }

  handleCreateTestEvent(test: Test){
    this.testCommand = 'creating';
    this.testCommandButton = "SALVAR";
    this.test = test;
  }

  handleUpdatePlanEvent(plan: Plan) {
    this.plan = plan;
  }

  handleUpdateVehicleEvent(vehicle: Vehicle) {
    this.vehicle = vehicle;
  }

  handleUpdateInjectorEvent(injector: Injector) {
    this.injector = injector;
  }

  handleUpdateUserEvent(user: any) {
    this.user = user;
  }

  handleUpdateWorkshopEvent(workshop: any) {  
    this.workshop = workshop;
  }

  handleResetFilterEvent() {
    this.filteredField = '';
    this.filteredList = this.testList;
  }
}
