import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Component, Input } from '@angular/core';
import { TestReport } from 'src/app/model/test-report.model';
import { ReportService } from 'src/app/services/report.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { CommonPageComponent } from 'src/app/components/commons/common-page/common-page.component';
import { Filter } from 'src/app/model/filter.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent extends CommonPageComponent {

  gaugeH = 0;
  gaugeY = 135;

  logoPath = '';
  serviceOrder: string = '';
  injectorNumber: string = '';
  currentWorkshop: any;
  startingSequence:  any = [];
  idlingSequence: any = [];
  halfLoadSequence: any = [];
  fullLoadSequence: any = [];
  preInjectionSequence: any = [];

  constructor(
    private router: Router,
    private userService: UserService,
    private reportService: ReportService,
    private login: LoginService,
  ) {
    super();
  }

  ngOnInit() {
    if(this.login.getAuthData() != null) {
      const userId = this.login.getAuthId();  
      this.userService.getWorkshop(userId).subscribe({ 
        next: workshop => {
          this.logoPath = 'assets/img/logos/' + workshop.logo;
          this.currentWorkshop = workshop;
          this.reportType = history.state.report;
          this.serviceOrder = history.state.serviceOrder;
          this.injectorNumber = history.state.injectorNumber;
    
          this.testCommand = 'reporting';
          
          if(this.reportType == 'service-order') {
            this.requestTestsByServiceOrder(this.serviceOrder);
          } else if(this.reportType == 'injector-number') {
            this.requestTestsByInjectorNumber(this.serviceOrder, this.injectorNumber);
          }
        },
        error: err => {
          this.login.setAuthData(null);
          this.goToLink('/login', this.login, this.router);
        }
      });

    } else {
      this.login.setAuthData(null);
      this.goToLink('/login', this.login, this.router);
    }
  }

  requestTestsByServiceOrder(serviceOrder: string) {
    let t = setTimeout(() => {
      this.reportService.getByServiceOrder(serviceOrder).subscribe({
        next: (report: TestReport) => {
          this.testReport = report;
          this.testList   =  this.testReport.testList.sort((a, b) => a.injectorNumber - b.injectorNumber);
          this.test = this.testList[0];
          this.plan = this.test.plan;
        }
      });
    }, 300);
  }


  requestTestsByInjectorNumber(serviceOrder: string, injectorNumber: string) {
    let t = setTimeout(() => {
      this.reportService.getByInjectorNumber(serviceOrder, Number(injectorNumber)).subscribe({
        next: (report: TestReport) => {
          this.testReport = report;
          this.testList   =  this.testReport.testList.sort((a, b) => Number(a.sequence) - Number(b.sequence));
          this.test = this.testList[0];
          this.plan = this.test.plan;

          for(let t of this.testList) {
            let p = t.plan

            this.startingSequence.push(
              {
                step: 'starting',         
                maxDeb: p.maxStarting,        
                minDeb: p.minStarting,       
                deb: t.starting, 
                maxRet: p.maxStartingReturn,        
                minRet: p.minStartingReturn,       
                ret: t.startingReturn
              }
            );

            this.idlingSequence.push(
              {
                step: 'idling',         
                maxDeb: p.maxIdling,        
                minDeb: p.minIdling,       
                deb: t.idling, 
                maxRet: p.maxIdlingReturn,        
                minRet: p.minIdlingReturn,       
                ret: t.idlingReturn
              }
            );

            this.halfLoadSequence.push(
              {
                step: 'half_load',      
                deb: t.halfLoad,
                maxDeb: p.maxHalfLoad,      
                minDeb: p.minHalfLoad,                          
                maxRet: p.maxHalfLoadReturn,      
                minRet: p.minHalfLoadReturn, 
                ret: t.halfLoadReturn 
              },
            );

            this.fullLoadSequence.push(
              {
                step: 'full_load',      
                maxDeb: p.maxFullLoad,      
                minDeb: p.minFullLoad,     
                deb: t.fullLoad,
                maxRet: p.maxFullLoadReturn,      
                minRet: p.minFullLoadReturn,
                ret: t.fullLoadReturn 
              }
            );

            this.preInjectionSequence.push(
              {
                step: 'pre_injectrion', 
                maxDeb: p.maxPreInjection,  
                minDeb: p.minPreInjection, 
                deb: t.preInjection,                 
                maxRet: p.maxPreInjectionReturn,  
                minRet: p.minPreInjectionReturn,
                ret: t.preInjectionReturn 
              },
            );
          }
        }
      });
    }, 300);
  }

  handleDownloadEvent() {
    this.download();
  }

  download() {
    window.scrollTo(0, 0);

    let buttons: any = document.getElementById('command-bnt');
    buttons.style.visibility = 'hidden';

    this.reportClass = (window.innerWidth < 768) ? 'report' : '';
    
    setTimeout(() => {
      let now = new Date();
      let date = now.getDate().toLocaleString() + (now.getMonth()+1).toString() + now.getFullYear().toString();
      let fileName = 'OS_' + this.serviceOrder + '_' + date + '.pdf';
      let toPrint: any = document.querySelector('#report');

      html2canvas(toPrint).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const imgWidth = 210; 
            const pageHeight = 297;
            const imgHeight = pageHeight * this.testReport.injectorQuantity;

            let heightLeft = imgHeight;
            const doc = new jsPDF('p', 'mm');
            let position = 5;
            doc.addImage(imgData, 'PNG', 10, position, imgWidth - 20, imgHeight);
            heightLeft -= pageHeight;

            let offset = (window.innerWidth < 768) ? 2.7 : 0;

            while (heightLeft >= pageHeight) {
                position = (heightLeft - imgHeight);
                doc.addPage();
                doc.addImage(imgData, 'PNG', 10, position, imgWidth - 20, imgHeight);
                heightLeft -= pageHeight;
            } 

            doc.save(fileName);
        });
        buttons.style.visibility = 'visible';
        this.reportClass = '';
    }, 100);
  }

  back() {
    this.router.navigate(['/']);
  }
}
