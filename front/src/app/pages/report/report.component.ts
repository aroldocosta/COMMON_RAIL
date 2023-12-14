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

  // debCanvasHalfLoId: string = '';
  // retCanvasHalfLoId: string = '';

  // @ViewChild('debCanvasHalfLo', {static: false}) debCanvasHalfLo!: ElementRef[];
  // @ViewChild('retCanvasHalfLo', {static: false}) retCanvasHalfLo!: ElementRef[];
  // @ViewChild('debCanvasIdling', {static: false}) debCanvasIdling!: ElementRef[];
  // @ViewChild('retCanvasIdling', {static: false}) retCanvasIdling!: ElementRef[];
  // @ViewChild('debCanvasFullLo', {static: false}) debCanvasFullLo!: ElementRef[];
  // @ViewChild('retCanvasFullLo', {static: false}) retCanvasFullLo!: ElementRef[];
  // @ViewChild('debCanvasPreInj', {static: false}) debCanvasPreInj!: ElementRef[];
  // @ViewChild('retCanvasPreInj', {static: false}) retCanvasPreInj!: ElementRef[];
  // public debContxtHalfLo!: CanvasRenderingContext2D[];
  // public retContxtHalfLo!: CanvasRenderingContext2D[];
  // public debContxtIdling!: CanvasRenderingContext2D[];
  // public retContxtIdling!: CanvasRenderingContext2D[];
  // public debContxtFullLo!: CanvasRenderingContext2D[];
  // public retContxtFullLo!: CanvasRenderingContext2D[];
  // public debContxtPreInj!: CanvasRenderingContext2D[];
  // public retContxtPreInj!: CanvasRenderingContext2D[];


  constructor(
    private reportService: ReportService,
    private testService: TestService,
    private planService: PlanService
  ) {
    // this.debCanvasHalfLoId = "debCanvasHalfLoId_1";
    // this.retCanvasHalfLoId = "retCanvasHalfLoId_1";
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

  // setCurrentTab(tab: any, debContxt: any, retContxt: any, test: Test, plan: Plan) {
  //   this.tabId = tab.id;
  //   this.tabTitle = tab.heading;
  //   this.editingTest = test;
  //   this.editingPlan = plan;
    
  //   if(tab.id == 'med_electric') {
  //     this.resColor = this.drawColor(test.resistance, plan.maxResistance, plan.minResistance);
  //     this.rctColor = this.drawColor(test.reactance,  plan.maxReactance,  plan.minReactance);
  //     this.isoColor = this.drawColor(test.isolation,  plan.maxIsolation,  plan.minIsolation);
  //   } else if(tab.id == 'half_load') {
  //     this.drawGauge(debContxt, test.halfLoad, plan.maxHalfLoad, plan.minHalfLoad);
  //     this.drawGauge(retContxt, test.halfLoadReturn, plan.maxHalfLoadReturn, plan.minHalfLoadReturn);
  //   } else if(tab.id == 'full_load') {
  //     this.drawGauge(debContxt, test.fullLoad, plan.maxFullLoad, plan.minFullLoad);
  //     this.drawGauge(retContxt, test.fullLoadReturn, plan.maxFullLoadReturn, plan.minFullLoadReturn);
  //   } else if(tab.id == 'idling') {
  //     this.drawGauge(debContxt, test.idling, plan.maxIdling, plan.minIdling);
  //     this.drawGauge(retContxt, test.idlingReturn, plan.maxIdlingReturn, plan.minIdlingReturn);
  //   } else if(tab.id == 'pre_injection') {
  //     this.drawGauge(debContxt, test.preInjection, plan.maxPreInjection, plan.minPreInjection);
  //     this.drawGauge(retContxt, test.preInjectionReturn, plan.maxPreInjectionReturn, plan.minPreInjectionReturn);
  //   } else if(tab.id == 'comments') {
  //     this.tabTitle = "OBSERVAÇÕES"
  //   }
  // }

  drawGauge(contxt: CanvasRenderingContext2D, value: string, maxValue: string, minValue: string) {
    // let colHeight = 130;
    // let val = Number(value);
    // let min = Number(minValue);
    // let max = Number(maxValue);
    // let ref = (max + min) / 2;

    // let n_val = 100*val/max;
    // let col  = (colHeight * n_val / 100);
    // let color = this.getColor(val, max, min);

    // this.gaugeY = colHeight - col+10;
    // this.gaugeH = col;

    

  }

  // getColor(val: number, max: number, min: number) {
  //   let red = 0;
  //   let grn = 0;
  //   let blu = 0;   
  //   let n_val = 100*val/max;
  //   let n_min = 100*min/max;
  //   let n_max = 100;
  //   let n_ref = 100*((max+min)/2)/max;
  //   let med1 = (n_ref + n_min)/2;
  //   let med2 = (n_ref + n_max)/2;

  //   if(val < min) {
  //     red = 255;
  //     grn = 255;
  //     blu = 0;
  //   } else if(val > max) {
  //     red = 255;
  //     grn = 0;
  //     blu = 0;
  //   } else { 
  //     if(n_val < med1) {//greenyellow
  //       red = 173;
  //       grn = 255;
  //       blu = 47;
  //       //rrgb(173,255,47)
  //     } else if(n_val < med2) { //green - rgb(0,255,0)
  //       red = 0;
  //       grn = 255;
  //       blu = 0;
  //     } else if(n_val <= n_max) {//orange - rgb(255,140,0)
  //       red = 255;
  //       grn = 140;
  //       blu = 0;
  //     }
  //   }
  //   let color = {red: red, grn: grn, blu: blu};
  //   return color;
  // }

  // drawColor(value: string, maxValue: string, minValue: string) {
  //   let val = Number(value);
  //   let min = (minValue != null) ? Number(minValue) : 0;
  //   let max = (maxValue != null) ? Number(maxValue) : 0;   
  //   let color = this.getColor(val, max, min);

  //   if(max <= min && val >= min) {color.red = 0; color.grn = 255; color.blu = 0}

  //   return `text-shadow: 1px 1px 2px black; color: rgb(${color.red}, ${color.grn}, ${color.blu}); `;
  // }

  download() {
    console.log("download");
  }
}
