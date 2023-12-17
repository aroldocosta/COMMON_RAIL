import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Plan } from 'src/app/model/plan.model';
import { FormatService } from 'src/app/services/format.service';
import { CommonsComponent } from '../commons/commons.component';

@Component({
  selector: 'app-plan-form',
  templateUrl: './plan-form.component.html',
  styleUrls: ['./plan-form.component.css']
})
export class PlanFormComponent extends CommonsComponent{

  @Input() planCommand: string = '';
  @Input() message: string = '';
  @Input() testDate: string = '';
  @Input() planList: any = [];
  @Input() vehicleList: any = [];
  @Input() injectorList: any = [];

  @Output() clearEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter<Plan>();


  constructor(
    private formatter: FormatService
  ) {
    super();
  }

  ngOnInit() {
    //let t = setTimeout(() => this.handleInputFormat(), 100);
  }

  emitClearMessage() {
    this.clearEvent.emit();
  }

  emitUpdatePlanEvent() {
    this.updateEvent.emit(this.plan);
  }

  handleMaxResistanceFormat() {
    this.emitUpdatePlanEvent();
  }


  handleMaxReactanceFormat() {
    this.emitUpdatePlanEvent();
  }

  handleMaxIsolationFormat() {
    this.emitUpdatePlanEvent();
  }

  handleMaxHalfLoadFormat() {
    this.emitUpdatePlanEvent();
  }

  handleMaxFullLoadFormat() {
    this.emitUpdatePlanEvent();
  }

  handleMaxIdlingFormat() {
    this.emitUpdatePlanEvent();
  }

  handleMaxPreInjectionFormat() {
    this.emitUpdatePlanEvent();
  }

  handleMaxHalfLoadReturnFormat() {
    this.emitUpdatePlanEvent();
  }

  handleMaxFullLoadReturnFormat() {
    this.emitUpdatePlanEvent();
  }

  handleMaxIdlingReturnFormat() {
    this.emitUpdatePlanEvent();
  }

  handleMaxPreInjectionReturnFormat() {
    this.emitUpdatePlanEvent();
  }

  handleHalfLoadPressureFormat() {
    this.emitUpdatePlanEvent();
  }

  handleFullLoadPressureFormat() {
    this.emitUpdatePlanEvent();
  }

  handleIdlingPressureFormat() {
    this.emitUpdatePlanEvent();
  }

  handlePreInjectionPressureFormat() {
    this.emitUpdatePlanEvent();
  }

  //-------------------------------------------------------

  handleMinResistanceFormat() {
    this.emitUpdatePlanEvent();
  }


  handleMinReactanceFormat() {
    this.emitUpdatePlanEvent();
  }

  handleMinIsolationFormat() {
    this.emitUpdatePlanEvent();
  }

  handleMinHalfLoadFormat() {
    this.emitUpdatePlanEvent();
  }

  handleMinFullLoadFormat() {
    this.emitUpdatePlanEvent();
  }

  handleMinIdlingFormat() {
    this.emitUpdatePlanEvent();
  }

  handleMinPreInjectionFormat() {
    this.emitUpdatePlanEvent();
  }

  handleMinHalfLoadReturnFormat() {
    this.emitUpdatePlanEvent();
  }

  handleMinFullLoadReturnFormat() {
    this.emitUpdatePlanEvent();
  }

  handleMinIdlingReturnFormat() {
    this.emitUpdatePlanEvent();
  }

  handleMinPreInjectionReturnFormat() {
    this.emitUpdatePlanEvent();
  }
}
