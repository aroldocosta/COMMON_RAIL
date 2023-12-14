import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Component, Input } from '@angular/core';
import { Plan } from 'src/app/model/plan.model';
import { TestReport } from 'src/app/model/test-report.model';
import { Test } from 'src/app/model/test.model';
import { PlanService } from 'src/app/services/plan.service';
import { ReportService } from 'src/app/services/report.service';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {

  gaugeH = 0;
  gaugeY = 135;

  resColor = ''; 
  rctColor = '';
  isoColor = '';

  serviceOrder: string = '';
  editingPlan: Plan = new Plan();
  editingTest: Test = new Test();
  testReport: TestReport = new TestReport();
  testList: Test[] = [];

  test = 1;

  @Input() tabId: string = 'med_electric';
  @Input() tabTitle: string = 'MED ELETRICAS';


  constructor(
    private reportService: ReportService,
    private testService: TestService,
    private planService: PlanService
  ) {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.serviceOrder = history.state.serviceOrder;

    let t = setTimeout(() => {
      this.reportService.getByServiceOrder(this.serviceOrder).subscribe({
        next: (report: TestReport) => {
  
          this.testReport = report;
  
          this.testService.list().subscribe({
            next: (list: Test[]) => {
              this.testList = list.sort((a, b) => a.injectorNumber - b.injectorNumber);
  
              this.editingTest = list[0]
  
              this.planService.get(this.editingTest.planId).subscribe({
                next: plan => {
                  this.editingPlan = plan;
                }
              });
            }
          });
        }
      });
    }, 500);
  }

  download() {
    window.scrollTo(0, 0);
    let buttons: any = document.getElementById('command-bnt');
    buttons.style.visibility = 'hidden';
    let btn_height = buttons.style.height;
    buttons.style.height = 0;

    setTimeout(() => {
      let now = new Date();
      let date = now.getDate().toLocaleString() + now.getMonth().toString() + now.getFullYear().toString();
      let fileName = 'OS_' + this.serviceOrder + '_' + date + '.pdf';
        let toPrint: any = document.querySelector('#report');
        html2canvas(toPrint).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const imgWidth = 190; 
            const pageHeight = 290;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
            const doc = new jsPDF('p', 'mm', 'a4');
            let position = 0;
            doc.addImage(imgData, 'PNG', 10, 0, imgWidth, imgHeight + 25);
            heightLeft -= pageHeight;
            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                doc.addPage();
                doc.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight + 25);
                heightLeft -= pageHeight;
            }
            doc.save(fileName);
        });
    }, 1000);

    buttons.style.visibility = 'visible';
    buttons.style.height = btn_height;
  }
}
