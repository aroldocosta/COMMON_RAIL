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

  @Input() tabId: string = 'med_electric';
  @Input() tabTitle: string = 'MED ELETRICAS';

  @ViewChild('debCanvasHalfLoad',     {static: false}) debCanvasHalfLoad!: ElementRef;
  @ViewChild('retCanvasHalfLoad',     {static: false}) retCanvasHalfLoad!: ElementRef;
  @ViewChild('debCanvasIdling',       {static: false}) debCanvasIdling!: ElementRef;
  @ViewChild('retCanvasIdling',       {static: false}) retCanvasIdling!: ElementRef;
  @ViewChild('debCanvasFullLoad',     {static: false}) debCanvasFullLoad!: ElementRef;
  @ViewChild('retCanvasFullLoad',     {static: false}) retCanvasFullLoad!: ElementRef;
  @ViewChild('debCanvasPreInjection', {static: false}) debCanvasPreInjection!: ElementRef;
  @ViewChild('retCanvasPreInjection', {static: false}) retCanvasPreInjection!: ElementRef;
  public debContxtHalfLoad!:     CanvasRenderingContext2D;
  public retContxtHalfLoad!:     CanvasRenderingContext2D;
  public debContxtIdling!:       CanvasRenderingContext2D;
  public retContxtIdling!:       CanvasRenderingContext2D;
  public debContxtFullLoad!:     CanvasRenderingContext2D;
  public retContxtFullLoad!:     CanvasRenderingContext2D;
  public debContxtPreInjection!: CanvasRenderingContext2D;
  public retContxtPreInjection!: CanvasRenderingContext2D;

  canvas: any = [];
  contxt: any = [];

  constructor(
    private reportService: ReportService,
    private testService: TestService,
    private planService: PlanService
  ) {}

  ngOnInit() {
    this.serviceOrder = history.state.serviceOrder;

      this.reportService.getByServiceOrder(this.serviceOrder).subscribe({
      next: (report: TestReport) => {

        this.testReport = report;

        this.testService.list().subscribe({
          next: list => {
            this.testList = list;

            this.editingTest = list[0];

            this.planService.get(this.editingTest.planId).subscribe({
              next: plan => {
                this.debContxtHalfLoad     = this.debCanvasHalfLoad.nativeElement.getContext('2d');
                this.retContxtHalfLoad     = this.retCanvasHalfLoad.nativeElement.getContext('2d');
                this.debContxtIdling       = this.debCanvasIdling.nativeElement.getContext('2d');
                this.retContxtIdling       = this.retCanvasIdling.nativeElement.getContext('2d');
                this.debContxtFullLoad     = this.debCanvasFullLoad.nativeElement.getContext('2d');
                this.retContxtFullLoad     = this.retCanvasFullLoad.nativeElement.getContext('2d');
                this.debContxtPreInjection = this.debCanvasPreInjection.nativeElement.getContext('2d');
                this.retContxtPreInjection = this.retCanvasPreInjection.nativeElement.getContext('2d');

                this.canvas = [
                  {deb: this.debCanvasHalfLoad,     ret: this.retCanvasHalfLoad},
                  {deb: this.debCanvasIdling,       ret: this.retCanvasIdling},
                  {deb: this.debCanvasFullLoad,     ret: this.retCanvasFullLoad},
                  {deb: this.debCanvasPreInjection, ret: this.retCanvasPreInjection}
                ]

                this.contxt = [
                  {deb: this.debContxtHalfLoad,     ret: this.retContxtHalfLoad},
                  {deb: this.debContxtIdling,       ret: this.retContxtIdling},
                  {deb: this.debContxtFullLoad,     ret: this.retContxtFullLoad},
                  {deb: this.debContxtPreInjection, ret: this.retContxtPreInjection}
                ]

                this.editingPlan = plan;
                for(let i = 0; i < this.testList.length; i++) {
                 
                  let tab: any;
                  tab = {id: 'half_load', heading: "CARGA PARCIAL"};
                  this.setCurrentTab(tab, this.contxt[i].deb , this.contxt[0].ret, this.testList[i], plan);

                  tab = {id: 'idling', heading: "MARCHA LENTA"};
                  this.setCurrentTab(tab, this.contxt[i].deb , this.contxt[1].ret, this.testList[i], plan);

                  tab = {id: 'full_load', heading: "CARGA PLENA"};
                  this.setCurrentTab(tab, this.contxt[i].deb , this.contxt[2].ret, this.testList[i], plan);

                  tab = {id: 'pre_injection', heading: "PRÉ INJEÇÃO"};
                  this.setCurrentTab(tab, this.contxt[i].deb , this.contxt[3].ret, this.testList[i], plan);
                }
              }
            });
          }
        });
      }
    });
  }

  setCurrentTab(tab: any, debContxt: any, retContxt: any, test: Test, plan: Plan) {
    this.tabId = tab.id;
    this.tabTitle = tab.heading;
    this.editingTest = test;
    this.editingPlan = plan;
    
    if(tab.id == 'med_electric') {
      this.resColor = this.drawColor(test.resistance, plan.maxResistance, plan.minResistance);
      this.rctColor = this.drawColor(test.reactance,  plan.maxReactance,  plan.minReactance);
      this.isoColor = this.drawColor(test.isolation,  plan.maxIsolation,  plan.minIsolation);
    } else if(tab.id == 'half_load') {
      this.drawGauge(debContxt, test.halfLoad, plan.maxHalfLoad, plan.minHalfLoad);
      this.drawGauge(retContxt, test.halfLoadReturn, plan.maxHalfLoadReturn, plan.minHalfLoadReturn);
    } else if(tab.id == 'full_load') {
      this.drawGauge(debContxt, test.fullLoad, plan.maxFullLoad, plan.minFullLoad);
      this.drawGauge(retContxt, test.fullLoadReturn, plan.maxFullLoadReturn, plan.minFullLoadReturn);
    } else if(tab.id == 'idling') {
      this.drawGauge(debContxt, test.idling, plan.maxIdling, plan.minIdling);
      this.drawGauge(retContxt, test.idlingReturn, plan.maxIdlingReturn, plan.minIdlingReturn);
    } else if(tab.id == 'pre_injection') {
      this.drawGauge(debContxt, test.preInjection, plan.maxPreInjection, plan.minPreInjection);
      this.drawGauge(retContxt, test.preInjectionReturn, plan.maxPreInjectionReturn, plan.minPreInjectionReturn);
    } else if(tab.id == 'comments') {
      this.tabTitle = "OBSERVAÇÕES"
    }
  }

  drawGauge(contxt: CanvasRenderingContext2D, value: string, maxValue: string, minValue: string) {
    let colHeight = 130;
    let val = Number(value);
    let min = Number(minValue);
    let max = Number(maxValue);
    let ref = (max + min) / 2;

    let n_val = 100*val/max;
    let col  = (colHeight * n_val / 100);
    let color = this.getColor(val, max, min);

    this.gaugeY = colHeight - col+10;
    this.gaugeH = col;

    // contxt.clearRect(0, 0, this.debCanvasHalfLoad.nativeElement.width,     this.debCanvasHalfLoad.nativeElement.height);
    // contxt.clearRect(0, 0, this.retCanvasHalfLoad.nativeElement.width,     this.retCanvasHalfLoad.nativeElement.height);
    // contxt.clearRect(0, 0, this.debCanvasIdling.nativeElement.width,       this.debCanvasIdling.nativeElement.height);
    // contxt.clearRect(0, 0, this.retCanvasIdling.nativeElement.width,       this.retCanvasIdling.nativeElement.height);
    // contxt.clearRect(0, 0, this.debCanvasFullLoad.nativeElement.width,     this.debCanvasFullLoad.nativeElement.height);
    // contxt.clearRect(0, 0, this.retCanvasFullLoad.nativeElement.width,     this.retCanvasFullLoad.nativeElement.height);
    // contxt.clearRect(0, 0, this.debCanvasPreInjection.nativeElement.width, this.debCanvasPreInjection.nativeElement.height);
    // contxt.clearRect(0, 0, this.retCanvasPreInjection.nativeElement.width, this.retCanvasPreInjection.nativeElement.height);
    
    contxt.beginPath();
    contxt.lineWidth = 6;
    contxt.fillStyle = `rgb(${color.red}, ${color.grn}, ${color.blu})`;
    contxt.fillRect(115, this.gaugeY, 76, this.gaugeH);
    contxt.stroke();

    let n_max = 100*max/max;
    let n_min = 100*min/max;
    let n_ref = 100*ref/max;

    let c_max = colHeight - (colHeight * n_max / 100) + 10;
    let c_min = colHeight - (colHeight * n_min / 100) + 10;
    let c_ref = colHeight - (colHeight * n_ref / 100) + 10;

    let x_1 = 205;
    let x_2 = 225;

    contxt.beginPath();
    contxt.lineTo(x_1, c_min);
    contxt.lineTo(x_2, c_min);
    contxt.strokeStyle = "orange";
    contxt.lineWidth = 1;
    contxt.stroke();

    contxt.beginPath();
    contxt.lineTo(x_1, c_ref);
    contxt.lineTo(x_2, c_ref);
    contxt.strokeStyle = "green";
    contxt.lineWidth = 1;
    contxt.stroke();

    contxt.beginPath();
    contxt.lineTo(x_1, c_max);
    contxt.lineTo(x_2, c_max);
    contxt.strokeStyle = "red";
    contxt.lineWidth = 1;
    contxt.stroke();

    contxt.font = "12px Monospace";
    contxt.fillStyle = "darkblue";
    contxt.fillText(min.toFixed(1), x_2+3, c_min);
    contxt.fillText(ref.toFixed(1), x_2+3, c_ref);
    contxt.fillText(max.toFixed(1), x_2+3, c_max);
  }

  getColor(val: number, max: number, min: number) {
    let red = 0;
    let grn = 0;
    let blu = 0;   
    let n_val = 100*val/max;
    let n_min = 100*min/max;
    let n_max = 100;
    let n_ref = 100*((max+min)/2)/max;
    let med1 = (n_ref + n_min)/2;
    let med2 = (n_ref + n_max)/2;

    if(val < min) {
      red = 255;
      grn = 255;
      blu = 0;
    } else if(val > max) {
      red = 255;
      grn = 0;
      blu = 0;
    } else { 
      if(n_val < med1) {//greenyellow
        red = 173;
        grn = 255;
        blu = 47;
        //rrgb(173,255,47)
      } else if(n_val < med2) { //green - rgb(0,255,0)
        red = 0;
        grn = 255;
        blu = 0;
      } else if(n_val <= n_max) {//orange - rgb(255,140,0)
        red = 255;
        grn = 140;
        blu = 0;
      }
    }
    let color = {red: red, grn: grn, blu: blu};
    return color;
  }

  drawColor(value: string, maxValue: string, minValue: string) {
    let val = Number(value);
    let min = (minValue != null) ? Number(minValue) : 0;
    let max = (maxValue != null) ? Number(maxValue) : 0;   
    let color = this.getColor(val, max, min);

    if(max <= min && val >= min) {color.red = 0; color.grn = 255; color.blu = 0}

    return `text-shadow: 1px 1px 2px black; color: rgb(${color.red}, ${color.grn}, ${color.blu}); `;
  }

  download() {
    console.log("download");
  }
}
