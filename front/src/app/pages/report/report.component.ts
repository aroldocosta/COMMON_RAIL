import { Component, ElementRef, Input, ViewChild } from '@angular/core';
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
      this.serviceOrder = history.state.serviceOrder;

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
  }


  download() {
    console.log("download");
  }
}
