import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Filter } from 'src/app/model/filter.model';
import { Test } from 'src/app/model/test.model';
import { Plan } from 'src/app/model/plan.model';
import { LoginService } from 'src/app/services/login.service';
import { PlanService } from 'src/app/services/plan.service';
import { formatNumber} from '@angular/common';
import { InjectorService } from 'src/app/services/injector.service';
import { AsideComponent } from 'src/app/components/aside/aside.component';
import { TestService } from 'src/app/services/test.service';
import { VehicleService } from 'src/app/services/vehicle.service';
import { Injector } from 'src/app/model/injector.model';
import { Vehicle } from 'src/app/model/vehicle.model';
import { UserService } from 'src/app/services/user.service';
import { TopMessageComponent } from 'src/app/components/top-message/top-message.component';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  @ViewChild(TopMessageComponent) topMessage?: TopMessageComponent;
  @ViewChild(AsideComponent) aside: any
  @Input() injectorList: Injector[] = [];
  @Input() vehicleList: Vehicle[] = [];
  @Input() planList: Plan[] = [];
  @Input() userList: User[] = [];
  testCommand: string = 'listing';
  modalCommand: string = 'listing';
  homeCommandButton = 'NOVO TESTE'
  modalCommandButton = 'NOVO'
  report: any = 'Aguarde...';
  editingTest = new Test();
  editingPlan = new Plan();
  editingVehicle = new Vehicle();
  editingInjector = new Injector();
  testPayment = '';
  testPlanId = '';
  testInjectorId = '';
  testDate = '';
  testQuantity = '0';
  alertMessage: string = '';
  testList: Test[] = [];
  filteredList: Test[] = [];
  enabledDateIni: boolean = true;
  enabledDateEnd: boolean = true;
  filteredField = '';
  filteredDateIni: string = '';
  filteredDateEnd: string = '';
  filteredTestDate: string = '';
  filteredTestSequence: string = '';
  filteredTestInjectorNumber: string = '';
  filteredTest: any;
  filteredVehicle: string = 'ALL';
  filteredInjector: string = 'ALL';
  filteredInjectorModel: string = '';
  filteredVechiclePlate: string = '';
  filteredSequence: number = 1;
  filteredServiceOrder: string = '';
  removingName: string = '';
  removingEvent: any;
  removingObjects: string = '';
  removingAlertTopTitle: string = '';
  removingAlertMessage01: string = '';
  removingAlertMessage02: string = '';

  currentTab: any = {id:'med_electric', heading: 'MED ELETRICAS'};

  constructor(
    private userService: UserService,
    private testService: TestService, 
    private loginService: LoginService, 
    private planService: PlanService,
    private vehicleService: VehicleService,
    private injectorService: InjectorService,
    private router: Router
    ) {
      let aside = new AsideComponent();
  }

  ngOnInit(): void {
    if(!this.loginService.isAuthenticated()) {
      this.router.navigateByUrl('/login');
    } else {
      this.requestUsers();
      this.requestTests();
      this.requestPlans();
      this.requestVehicles;
      this.requestInjectors();
      this.filteredDateIni = this.getFormattedDate(new Date());
      this.filteredDateEnd = this.getFormattedDate(new Date()); 
      // this.filteredDateTest = this.getFormattedDate(new Date());
      this.editingTest.planId = '0';
      this.editingTest.injectorModel = '0';
      this.editingTest.vehiclePlate = '0';
    }

    //let modal = document.getElementById('planModalToggle');
  }

  /* ---------------- Command Button Handlers ----------------- */
  handleTestCommandButton() {

    let button = 'NOVO';
    let command = 'listing';
    if(this.testCommand == 'listing') {
      button = 'SALVAR';
      command = 'creating';
      this.editingTest = new Test();
      this.requestPlans();
      this.requestVehicles();
      this.requestInjectors();
    } else if(this.testCommand == 'creating') {
      this.topMessage?.setAlertMessage("Criando teste..", this.topMessage.SUCCESS, 1000);
      command = 'editing';
      button = 'SALVAR';
      this.saveTest();
      this.requestTests();
    } else if(this.testCommand == 'editing') {
      this.topMessage?.setAlertMessage("Salvando dados do teste..", this.topMessage.SUCCESS, 1000);
      command = 'editing';
      button = 'SALVAR';
      this.updateTest();
      this.requestTests();
    }
    this.testCommand = command;
    this.homeCommandButton = button;
  }

  cancelTestCommandButton() {
    console.log("cancelTestCommandButton")
    this.testCommand = 'listing';
    this.homeCommandButton = 'NOVO TESTE'
  }

  handlePlanCommandButton() { 
    if(this.modalCommand == 'listing') {
      this.modalCommand = 'creating';
      this.modalCommandButton = 'SALVAR';
      this.editingPlan = new Plan();
    } else if(this.modalCommand == 'creating') {
      this.modalCommand = 'listing';
      this.modalCommandButton = 'NOVO';
      this.savePlan();
    } else if(this.modalCommand == 'editing') {
      this.modalCommand = 'listing';   
      this.modalCommandButton = 'NOVO';
      this.updatePlan();
    }
  }

  cancelPlanCommandButton() {
    if(this.modalCommand == 'listing') {
      document.getElementById('planModalCloseButton')?.click();
    } else if(this.modalCommand = 'removing') {
      document.getElementById('removeCloseModalButton')?.click();
      this.modalCommand = 'listing';
      this.modalCommandButton = 'NOVO'
    } 
    else {
      this.modalCommand = 'listing';
      this.modalCommandButton = 'NOVO'
    }
  }

  handleVehicleCommandButton() {
    console.log("Command: " + this.modalCommand);
    if(this.modalCommand == 'listing') {
      this.modalCommand = 'creating';
      this.modalCommandButton = 'SALVAR';
      this.editingVehicle = new Vehicle();
    } else if(this.modalCommand == 'creating') {
      this.modalCommand = 'listing';
      this.modalCommandButton = 'NOVO';
      this.saveVehicle();
    } else if(this.modalCommand == 'editing') {
      this.modalCommand = 'listing';   
      this.modalCommandButton = 'NOVO';
      this.updateVehicle();
    }
  }

  cancelVehicleCommandButton() {
    console.log(this.modalCommand);
    if(this.modalCommand == 'listing') {
      console.log("Entrou aqui")
      document.getElementById('vehicleModalCloseButton')?.click();
    } else {
      this.modalCommand = 'listing';
      this.modalCommandButton = 'NOVO'
    }
  }

  handleInjectorCommandButton() {
    if(this.modalCommand == 'listing') {
      this.modalCommand = 'creating';
      this.modalCommandButton = 'SALVAR';
      this.editingInjector = new Injector();
      this.requestPlans();
    } else if(this.modalCommand == 'creating') {
      this.modalCommand = 'listing';
      this.modalCommandButton = 'NOVO';
      this.saveInjector();
    } else if(this.modalCommand == 'editing') {
      this.modalCommand = 'listing';   
      this.modalCommandButton = 'NOVO';
      this.updateInjector();
    }
  }

  cancelInjectorCommandButton() {
    if(this.modalCommand == 'listing') {
      console.log("Entrou aqui")
      document.getElementById('injectorModalCloseButton')?.click();
    } else {
      this.modalCommand = 'listing';
      this.modalCommandButton = 'NOVO'
    }
  }
  /*------------------------------------------------------------*/

  handleEditingTestEvent(test: Test) {
    console.log("-------- EDITING TEST --------\n" + JSON.stringify(test));
    this.editingTest = test;
    this.testCommand = 'editing';
    this.homeCommandButton = 'SALVAR';

    this.planService.get(test.planId).subscribe({
      next: plan => {
        this.editingPlan = plan;
        this.handleTabbingTestEvent(this.currentTab);
      },
      error: err => {
        console.log("Error: ", err);
      }
    });
  }

  handleRemovingTestEvent(test: Test) {
    
  }

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

  requestUsers() {
    this.userService.list().subscribe({
      next: list => {
        this.userList = list;
      }
    })
  }

  requestPlans() {
    this.planService.list().subscribe({
      next: list => {
        this.planList = list;
      }
    })
  }

  requestVehicles() {
    this.vehicleService.list().subscribe({
      next: list => {
        this.vehicleList = list;
      }
    })
  }

  requestInjectors() {
    this.injectorService.list().subscribe({
      next: list => {
        this.injectorList = list;
        this.modalCommand = 'listing';
        this.modalCommandButton = 'NOVO'; 
      },
      error: err => {
        console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%\n" + err)
      }
    })
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
    this.editingTest.date = this.getFormattedDate(today);
    this.testService.create(this.editingTest).subscribe({
      next: resp => {
        //document.getElementById("newCloseModalButton")?.click();
        this.requestTests();
      },
      error: err => {
        console.log("Error: " + JSON.stringify(err));
      }
    })
  }

  updateTest() { 
    this.testService.update(this.editingTest).subscribe({
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
    this.planService.create(this.editingPlan).subscribe({
      next: resp => {
        this.planService.list().subscribe({
          next: list => {
            this.planList = list;
          }
        })
      },
      error: err => {
        console.log(JSON.stringify(err));
      }
    })
  }

  updatePlan() {
    this.planService.update(this.editingPlan).subscribe({
      next: resp => {
        console.log(JSON.stringify(resp));
        this.planService.list().subscribe({
          next: list => {
            this.planList = list;
          }
        })
      },
      error: err => {
        console.log(JSON.stringify(err));
      }
    })
  }

  saveVehicle() {
    this.vehicleService.create(this.editingVehicle).subscribe({
      next: resp => {
        this.vehicleService.list().subscribe({
          next: list => {
            this.vehicleList = list;
            for(let p of this.planList) {
              console.log(p.code);
            }
          }
        })
      },
      error: err => {
        console.log(JSON.stringify(err));
      }
    })
  }

  updateVehicle() {
    this.vehicleService.update(this.editingVehicle).subscribe({
      next: resp => {
        console.log(JSON.stringify(resp));
        this.vehicleService.list().subscribe({
          next: list => {
            this.vehicleList = list;
          }
        })
      },
      error: err => {
        console.log(JSON.stringify(err));
      }
    })
  }

  saveInjector() {
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@22\n" + JSON.stringify(this.editingInjector));
    this.injectorService.create(this.editingInjector).subscribe({
      next: resp => {
        this.injectorService.list().subscribe({
          next: list => {
            this.injectorList = list;
          }
        })
      },
      error: err => {
        console.log(JSON.stringify(err));
      }
    })
  }

  updateInjector() {
    this.injectorService.update(this.editingInjector).subscribe({
      next: resp => {
        console.log(JSON.stringify(resp));
        this.injectorService.list().subscribe({
          next: list => {
            this.injectorList = list;
          }
        })
      },
      error: err => {
        console.log(JSON.stringify(err));
      }
    })
  }

  view(formData: FormData) {

  }

  requestTests() {
    this.testService.list().subscribe({
      next: list => {        
        this.testList = list;
        this.filteredList = this.testList.sort((a, b) => {
          if(a.serviceOrder  == b.serviceOrder) {
            return a.injectorNumber - b.injectorNumber;
          } 
          return a.serviceOrder > b.serviceOrder ?  -1 : 1;
        });
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

  doTestCombinedFilter() {
    console.log("Test Combined filter")
  }

  doTestInjectorNumberFilter() {
    this.filteredField = 'injectorNumber';
    this.filteredList = this.testList
      .filter(t => t.injectorNumber == Number(this.filteredTestInjectorNumber));
    document.getElementById("injectorNumberFilterCloseModalButton")?.click();    
                               
  }

  doTestSequenceFilter() {
    this.filteredField = 'sequence';
    this.filteredList = this.testList
      .filter(t => t.sequence == this.filteredTestSequence);
    document.getElementById("sequenceFilterCloseModalButton")?.click();  
  }
 
  doTestDateFilter() {
    this.filteredField = 'date';
    this.filteredList = this.testList
      .filter(t => t.date == this.filteredTestDate);
    document.getElementById("dateFilterCloseModalButton")?.click();  
  }

  doTestInjectorFilter() {
    this.filteredField = 'injectorModel';
    this.filteredList = this.testList
    .filter(t => t.injectorModel == this.filteredInjectorModel)
    document.getElementById("injectorFilterCloseModalButton")?.click(); 
  }

  doTestVehicleFilter() {
    this.filteredField = 'vehicle';
    this.filteredList = this.testList
    .filter(t => t.vehiclePlate == this.filteredVechiclePlate);
    document.getElementById("vehicleFilterCloseModalButton")?.click(); 
  }

  doTestFilteredOrderFilter() {
    this.filteredField = 'serviceOrder';
    this.filteredList = this.testList
    .filter(t => t.serviceOrder == this.filteredServiceOrder)
    .sort((a, b) => a.injectorNumber - b.injectorNumber)
    document.getElementById("serviceOrderFilterCloseModalButton")?.click(); 
  }

  //edit(test: Test) {
    // this.testPlanId = test.planId;
    // this.testPayment = this.appyCurrencyMask(test.payment.toFixed(2));
    // this.testQuantity = this.appyCurrencyMask(test.quantity.toFixed(2));
    // this.testDate = test.date.split('T')[0];   
    // this.editingTest = test;
  //}

  confirmRemove() {

    let modal: any;
    //let method: any;
    let service: any;
    let component: any;
 
    if(this.removingEvent.class == 'Plan') {
      service = this.planService;
      component = Plan;
      modal = document.getElementById("planMenuLink");
    } else if(this.removingEvent.class == 'Test') {
      service = this.testService;
      component = Test;
    } else if(this.removingEvent.class == 'Vehicle') {
      modal = document.getElementById("vehicleMenuLink");
      service = this.vehicleService;
      component = Vehicle;
    } else if(this.removingEvent.class == 'Injector') {
      modal = document.getElementById("injectorMenuLink");
      service = this.injectorService;
      component = Injector;
    } 

    service.remove(this.removingEvent.object.id).subscribe({
      next: (resp: any) => {
        document.getElementById("removeCloseModalButton")?.click();
        modal?.click();
        this.modalCommand = 'listing';
        this.modalCommandButton = "NOVO"
        service.list().subscribe({
          next: (list: any) => {
            component.list = list;
          }
        });
      },
      error: (err: any) => {
        this.alertMessage = "Ação não permitida, entre em contato com a gerência."
      }
    })
  }

  cancelRemove() {

  }

  handlePlanCommandEvent(event: any) {  
    this.modalCommand = event.command;
    if(event.command == 'editing') {
      this.modalCommandButton = 'SALVAR';
      this.editingPlan = event.object;
    } else if(event.command == 'saving') {

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
    console.log("Event: " + JSON.stringify(event));
    if(event.command == 'editing') {
      this.modalCommand = event.command;
      this.modalCommandButton = 'SALVAR';
      this.editingVehicle = event.object;
    } else if(event.command == 'saving') {

    } else if(event.command == 'removing') {
      this.removingObjects = ''; 
      this.removingName = event.object.plate;
      this.removingEvent = event;
      this.removingAlertMessage01 = "Deseja remover o veículo ";
      this.removingAlertTopTitle = "REMOVER VEÍCULO";
    }
  }

  handleInjectorCommandEvent(event: any) {  
    console.log("------------- Event -------------\n" + JSON.stringify(event));
    if(event.command == 'editing') {
      this.modalCommand = event.command;
      this.modalCommandButton = 'SALVAR';
      this.editingInjector = event.object;
    } else if(event.command == 'saving') {

    } else if(event.command == 'removing') {
      this.removingObjects = '';
      this.removingName = event.object.model;
      this.removingEvent = event;
      this.removingAlertMessage01 = "Deseja remover o injetor ";
      this.removingAlertTopTitle = "REMOVER INJETOR";
    }
  }

  // handleSaveEvent(event: any) {
  //   console.log("----------------- handleSaveEvent -----------------\n" + JSON.stringify(event));
  // }

  handleTabbingTestEvent(tab: any) {

    this.currentTab = tab;
    this.aside.setCurrentTab(this.currentTab, this.editingTest, this.editingPlan, this.editingInjector);
  }

  handleUpdateTestEvent(test: Test) {
    this.editingTest = test;  
    this.handleTabbingTestEvent(this.currentTab);
  }

  handleUpdateTestPlanEvent(test: Test) {
    this.editingTest = test; 
    let planId = this.editingTest.planId;
    
    this.planService.get(planId).subscribe({
      next: plan => {
        this.editingPlan = plan;
        let planType = (this.editingPlan != null) ? this.editingPlan.type : '';
        let injectorType = (this.editingInjector != null) ? this.editingInjector.type : '';
        let injectorTypeSelected = (this.editingInjector != null && this.editingInjector.type.length > 0);

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
    this.editingTest = test;
    let injectorId = this.editingTest.injectorId;
    
    this.injectorService.get(injectorId).subscribe({
      next: injector => {
        this.editingInjector = injector;
        this.editingTest.planId = injector.planId;
        this.handleTabbingTestEvent(this.currentTab);
      },
      error: err => {
        console.log("Error: ", err)
      }
    }) 
  }

  handleCreateTestEvent(test: Test){
    console.log("Teste de criação");
    this.testCommand = 'creating';
    this.homeCommandButton = "SALVAR";
    this.editingTest = test;
  }

  handleUpdatePlanEvent(plan: Plan) {
    this.editingPlan = plan;
  }

  handleUpdateVehicleEvent(vehicle: Vehicle) {
    this.editingVehicle = vehicle;
  }

  handleUpdateInjectorEvent(injector: Injector) {
    this.editingInjector = injector;
  }

  handleResetFilterEvent() {
    this.filteredField = '';
    this.filteredList = this.testList;
  }
}
