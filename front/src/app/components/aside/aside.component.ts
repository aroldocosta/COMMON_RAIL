import { ThisReceiver } from '@angular/compiler';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Plan } from 'src/app/model/plan.model';
import { Test } from 'src/app/model/test.model';
import { PlanService } from 'src/app/services/plan.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {  

  editingPlan: Plan = new Plan();
  editingTest: Test = new Test();
  tabId: string = 'med_electric';
  tabTitle: string = 'MED ELETRICAS';
  gaugeH = 0;
  gaugeY = 135;

  res_color = ''; 
  rct_color = '';
  iso_color = '';

  // @ViewChild('gauge', { static: false, read: HTMLCanvasElement }) gauge!: HTMLCanvasElement;
  // @ViewChild('gaugeCanvas') gaugeCanvas!: ElementRef;
  @ViewChild('debCanvas', {static: false}) debCanvas!: ElementRef;
  @ViewChild('retCanvas', {static: false}) retCanvas!: ElementRef;
  public debContxt!: CanvasRenderingContext2D;
  public retContxt!: CanvasRenderingContext2D;

  constructor() { 
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.debContxt = this.debCanvas.nativeElement.getContext('2d');
    this.retContxt = this.retCanvas.nativeElement.getContext('2d');
  }

  drawGauge(contxt: CanvasRenderingContext2D, value: string, maxValue: string, minValue: string) {
    let colHeight = 130;
    let val = Number(value);
    let min = Number(minValue);
    let max = Number(maxValue);

    let n_val = 100*val/max;
    let col  = (colHeight * n_val / 100);
    let color = this.getColor(val, max, min);

    this.gaugeY = colHeight - col+10;
    this.gaugeH = col;

    contxt.clearRect(0, 0, this.debCanvas.nativeElement.width, this.debCanvas.nativeElement.height);
    contxt.clearRect(0, 0, this.retCanvas.nativeElement.width, this.retCanvas.nativeElement.height);
    contxt.beginPath();
    contxt.lineWidth = 6;
    contxt.fillStyle = `rgb(${color.red}, ${color.grn}, ${color.blu})`;
    contxt.fillRect(85, this.gaugeY, 130, this.gaugeH);
    contxt.stroke();
  }


  requestTotals() {

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

    console.log("Max: " + max + " Min: " + min);
    
    let color = this.getColor(val, max, min);

    if(max <= min && val >= min) {color.red = 0; color.grn = 255; color.blu = 0}

    return `text-shadow: 1px 1px 2px black; color: rgb(${color.red}, ${color.grn}, ${color.blu}); `;
  }

  setCurrentTab(tab: any, test: Test, plan: Plan) {
    this.tabId = tab.id;
    this.tabTitle = tab.heading;
    this.editingTest = test;
    this.editingPlan = plan;

    if(tab.id == 'med_electric') {
      this.res_color = this.drawColor(test.resistance, plan.maxResistance, plan.minResistance);
      this.rct_color = this.drawColor(test.reactance,  plan.maxReactance,  plan.minReactance);
      this.iso_color = this.drawColor(test.isolation,  plan.maxIsolation,  plan.minIsolation);
    }else if(tab.id == 'half_load') {
      this.drawGauge(this.debContxt, test.halfLoad, plan.maxHalfLoad, plan.minHalfLoad);
      this.drawGauge(this.retContxt, test.halfLoadReturn, plan.maxHalfLoadReturn, plan.minHalfLoadReturn);
    } else if(tab.id == 'full_load') {
      this.drawGauge(this.debContxt, test.fullLoad, plan.maxFullLoad, plan.minFullLoad);
      this.drawGauge(this.retContxt, plan.maxFullLoadReturn, test.fullLoadReturn, plan.minFullLoadReturn);
    } else if(tab.id == 'idling') {
      this.drawGauge(this.debContxt, test.idling, plan.maxIdling, plan.minIdling);
      this.drawGauge(this.retContxt, test.idlingReturn, plan.maxIdlingReturn, plan.minIdlingReturn);
    } else if(tab.id == 'pre_injection') {
      this.drawGauge(this.debContxt, test.preInjection, plan.maxPreInjection, plan.minPreInjection);
      this.drawGauge(this.retContxt, test.preInjectionReturn, plan.maxPreInjectionReturn, plan.minPreInjectionReturn);
    }
  }
}
