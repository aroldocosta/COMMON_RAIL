import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Plan } from 'src/app/model/plan.model';
import { Test } from 'src/app/model/test.model';
import { CommonPageComponent } from '../common-page/common-page.component';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent extends CommonPageComponent implements OnInit {  

  gaugeH = 0;
  gaugeY = 135;
  valDeb: string = '';
  maxDeb: string = '';
  minDeb: string = '';
  valRet: string = '';
  maxRet: string = '';
  minRet: string = '';
  logo: string = '';
  @Input() logoPath: string = '';

  @Output() arrowEvent = new EventEmitter<string>();
  constructor() { 
    super();
  }

  ngOnInit(): void {
    
  }


  setDebGraphValue(val: string, max: string, min: string) {
    this.valDeb = val;
    this.maxDeb = max;
    this.minDeb = min;
  }

  setRetGraphValue(val: string, max: string, min: string) {
    this.valRet = val;
    this.maxRet = max;
    this.minRet = min;
  }

  setCurrentTab(tab: any, test: Test, plan: Plan) {
    this.tabId = tab.id;
    this.tabTitle = tab.heading;
    this.test = test;
    this.plan = plan;

    if(tab.id == 'starting') {
      this.setDebGraphValue(test.starting, plan.maxStarting, plan.minStarting);
      this.setRetGraphValue(test.startingReturn, plan.maxStartingReturn, plan.minStartingReturn);
    } else if(tab.id == 'idling') {
      this.setDebGraphValue(test.idling, plan.maxIdling, plan.minIdling);
      this.setRetGraphValue(test.idlingReturn, plan.maxIdlingReturn, plan.minIdlingReturn);
    } else if(tab.id == 'half_load') {
      this.setDebGraphValue(test.halfLoad, plan.maxHalfLoad, plan.minHalfLoad);
      this.setRetGraphValue(test.halfLoadReturn, plan.maxHalfLoadReturn, plan.minHalfLoadReturn);
    } else if(tab.id == 'full_load') {
      this.setDebGraphValue(test.fullLoad, plan.maxFullLoad, plan.minFullLoad);
      this.setRetGraphValue(test.fullLoadReturn, plan.maxFullLoadReturn, plan.minFullLoadReturn);
    } else if(tab.id == 'pre_injection') {
      this.setDebGraphValue(test.preInjection, plan.maxPreInjection, plan.minPreInjection);
      this.setRetGraphValue(test.preInjectionReturn, plan.maxPreInjectionReturn, plan.minPreInjectionReturn);
    }
  }


  emitArrowEvent(arrow: string) {
    this.arrowEvent.emit(arrow);
  }
}
