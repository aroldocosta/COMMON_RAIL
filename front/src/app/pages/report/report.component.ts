import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Component, Input } from '@angular/core';
import { Plan } from 'src/app/model/plan.model';
import { TestReport } from 'src/app/model/test-report.model';
import { Test } from 'src/app/model/test.model';
import { PlanService } from 'src/app/services/plan.service';
import { ReportService } from 'src/app/services/report.service';
import { TestService } from 'src/app/services/test.service';
import { CommonsComponent } from 'src/app/components/commons/commons.component';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent extends CommonsComponent {

  gaugeH = 0;
  gaugeY = 135;

  serviceOrder: string = '';
  // plan: Plan = new Plan();
  // test: Test = new Test();
  testReport: TestReport = new TestReport();
  testList: Test[] = [];

  //test = 1;

  @Input() tabId: string = 'med_electric';

  constructor(
    private reportService: ReportService,
    private testService: TestService,
    private planService: PlanService
  ) {
    super();
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.serviceOrder = history.state.serviceOrder;
    this.testCommand = 'reporting';
    
    let t = setTimeout(() => {
      this.reportService.getByServiceOrder(this.serviceOrder).subscribe({
        next: (report: TestReport) => {
          this.testReport = report;
          this.testList   =  this.testReport.testList.sort((a, b) => a.injectorNumber - b.injectorNumber);
          this.test = this.testList[0];
          this.plan = this.test.plan;
        }
      });
    }, 100);
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
            let position = 0;
            doc.addImage(imgData, 'PNG', 10, position, imgWidth - 20, imgHeight);
            heightLeft -= pageHeight;

            let offset = (window.innerWidth < 768) ? 2.7 : 1;

            do {
                position = (heightLeft - imgHeight);
                doc.addPage();
                doc.addImage(imgData, 'PNG', 10, position + 2*offset++, imgWidth - 20, imgHeight);
                heightLeft -= pageHeight;
            } while (heightLeft >= pageHeight);

            doc.save(fileName);
        });
        buttons.style.visibility = 'visible';
        this.reportClass = '';
    }, 100);
  }
}
