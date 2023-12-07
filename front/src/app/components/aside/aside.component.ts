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

  drawGauge(contxt: CanvasRenderingContext2D, maxValue: string, minValue: string, measuredValue: string) {
    let colHeight = 130;
    let red = 0;
    let grn = 255;
    let blu = 0;

    let val = Number(measuredValue);
    let min = Number(minValue);
    let max = Number(maxValue);

    let n_val = 100*val/max;
    
    let n_min = 100*min/max;

    let n_max = 100;

    let n_ref = 100*((max+min)/2)/max;

    let col = (colHeight * n_val / 100);

    if(val < min) {
      red = 255;
      grn = 255;
      blu = 0;
    } else if(val > max) {
      red = 255;
      grn = 0;
      blu = 0;
    } else {
      
      
      if(n_val < (n_ref + min)/2) {//greenyellow
        red = 173;
        grn = 255;
        blu = 47;
        //rrgb(173,255,47)
      } else if(n_val < (n_ref + max)/2) { //green - rgb(0,255,0)
        red = 0;
        grn = 255;
        blu = 0;
      } else if(n_val <= n_max) {//orange - rgb(255,140,0)
        red = 255;
        grn = 140;
        blu = 0;
      }
    }

    this.gaugeY = colHeight - col+10;
    this.gaugeH = col;

    contxt.clearRect(0, 0, this.debCanvas.nativeElement.width, this.debCanvas.nativeElement.height);
    contxt.clearRect(0, 0, this.retCanvas.nativeElement.width, this.retCanvas.nativeElement.height);
    contxt.beginPath();
    contxt.lineWidth = 6;
    contxt.fillStyle = `rgb(${red}, ${grn}, ${blu})`;
    contxt.fillRect(85, this.gaugeY, 130, this.gaugeH);
    contxt.stroke();
  }


  requestTotals() {

  }

  setCurrentTab(tab: any, test: Test, plan: Plan) {
    this.tabId = tab.id;
    this.tabTitle = tab.heading;
    this.editingTest = test;
    this.editingPlan = plan;

    if(tab.id == 'half_load') {
      this.drawGauge(this.debContxt, plan.maxHalfLoad, plan.minHalfLoad, test.halfLoad);
      //this.drawGauge(this.retContxt, plan.maxHalfLoadReturn, plan.minHalfLoadReturn, test.halfLoadReturn);
    } else if(tab.id == 'full_load') {
      this.drawGauge(this.debContxt, plan.maxFullLoad, plan.minFullLoad, test.fullLoad);
      this.drawGauge(this.retContxt, plan.maxFullLoadReturn, plan.minFullLoadReturn, test.fullLoadReturn);
    } else if(tab.id == 'idling') {
      this.drawGauge(this.debContxt, plan.maxIdling, plan.minIdling, test.idling);
      this.drawGauge(this.retContxt, plan.maxIdlingReturn, plan.minIdlingReturn, test.idlingReturn);
    } else if(tab.id == 'pre_injection') {
      this.drawGauge(this.debContxt, plan.maxPreInjection, plan.minPreInjection, test.preInjection);
      this.drawGauge(this.retContxt, plan.maxPreInjectionReturn, plan.minPreInjectionReturn, test.preInjectionReturn);
    }
  }
}
