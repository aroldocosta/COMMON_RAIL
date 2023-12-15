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
          this.testList   =  this.testReport.testList.sort((a, b) => a.injectorNumber - b.injectorNumber);
          this.editingTest = this.testList[0];
          this.editingPlan = this.editingTest.plan;
        }
      });
    }, 500);
  }

  download() {
    window.scrollTo(0, 0);

    let buttons: any = document.getElementById('command-bnt');
    buttons.style.visibility = 'hidden';

    setTimeout(() => {
      let now = new Date();
      let date = now.getDate().toLocaleString() + now.getMonth().toString() + now.getFullYear().toString();
      let fileName = 'OS_' + this.serviceOrder + '_' + date + '.pdf';
      let toPrint: any = document.querySelector('#report');

      html2canvas(toPrint).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const imgWidth = 210; 
            const pageHeight = 297;
            const imgHeight = pageHeight * this.testReport.injectorQuantity;

            let heightLeft = imgHeight;
            const doc = new jsPDF('p', 'mm');
            let position = 0;
            doc.addImage(imgData, 'PNG', 10, position, imgWidth - 20, imgHeight);
            heightLeft -= pageHeight;

            let offset = 1;

            do {
                position = (heightLeft - imgHeight);
                doc.addPage();
                doc.addImage(imgData, 'PNG', 10, position + 2*offset++, imgWidth - 20, imgHeight);
                heightLeft -= pageHeight;
            } while (heightLeft >= pageHeight);

            doc.save(fileName);
        });
        buttons.style.visibility = 'visible';
    }, 500);
  }
}
