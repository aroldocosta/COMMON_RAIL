import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Plan } from 'src/app/model/plan.model';
import { FormatService } from 'src/app/services/format.service';

@Component({
  selector: 'app-plan-form',
  templateUrl: './plan-form.component.html',
  styleUrls: ['./plan-form.component.css']
})
export class PlanFormComponent {


  @Input() planCommand: string = '';
  @Input() message: string = '';
  @Input() testDate: string = '';
  @Input() testList: any = [];
  @Input() planList: any = [];
  @Input() vehicleList: any = [];
  @Input() injectorList: any = [];

  @Output() clearEvent = new EventEmitter();
  //@Output() saveEvent = new EventEmitter<Plan>();
  @Output() updateEvent = new EventEmitter<Plan>();

  @Input() editingPlan: Plan = new Plan();

  constructor(
    private formatter: FormatService
  ) {
  }

  ngOnInit() {
    //let t = setTimeout(() => this.handleInputFormat(), 100);
  }

  emitClearMessage() {
    this.clearEvent.emit();
  }

  emitUpdatePlanEvent() {
    this.updateEvent.emit(this.editingPlan);
  }

  handleMaxResistanceFormat() {
    this.editingPlan.maxResistance         = this.formatter.format(this.editingPlan.maxResistance);
    this.emitUpdatePlanEvent();
  }


  handleMaxInductanceFormat() {
    this.editingPlan.maxInductance         = this.formatter.format(this.editingPlan.maxInductance);
    this.emitUpdatePlanEvent();
  }

  handleMaxIsolationFormat() {
    this.editingPlan.maxIsolation          = this.formatter.format(this.editingPlan.maxIsolation);
    this.emitUpdatePlanEvent();
  }

  handleMaxHalfLoadFormat() {
    this.editingPlan.maxHalfLoad           = this.formatter.format(this.editingPlan.maxHalfLoad);
    this.emitUpdatePlanEvent();
  }

  handleMaxFullLoadFormat() {
    this.editingPlan.maxFullLoad           = this.formatter.format(this.editingPlan.maxFullLoad);
    this.emitUpdatePlanEvent();
  }

  handleMaxIdlingFormat() {
    this.editingPlan.maxIdling             = this.formatter.format(this.editingPlan.maxIdling); 
    this.emitUpdatePlanEvent();
  }

  handleMaxPreInjectionFormat() {
    this.editingPlan.maxPreInjection       = this.formatter.format(this.editingPlan.maxPreInjection);
    this.emitUpdatePlanEvent();
  }

  handleMaxHalfLoadReturnFormat() {
    this.editingPlan.maxHalfLoadReturn     = this.formatter.format(this.editingPlan.maxHalfLoadReturn);
    this.emitUpdatePlanEvent();
  }

  handleMaxFullLoadReturnFormat() {
    this.editingPlan.maxFullLoadReturn     = this.formatter.format(this.editingPlan.maxIdlingReturn);
    this.emitUpdatePlanEvent();
  }

  handleMaxIdlingReturnFormat() {
    this.editingPlan.maxIdlingReturn       = this.formatter.format(this.editingPlan.maxIdlingReturn); 
    this.emitUpdatePlanEvent();
  }

  handleMaxPreInjectionReturnFormat() {
    this.editingPlan.maxPreInjectionReturn = this.formatter.format(this.editingPlan.maxPreInjectionReturn);
    this.emitUpdatePlanEvent();
  }

  handleHalfLoadPressureFormat() {
    this.editingPlan.halfLoadPressure = this.formatter.format(this.editingPlan.halfLoadPressure);
    this.emitUpdatePlanEvent();
  }

  handleFullLoadPressureFormat() {
    this.editingPlan.fullLoadPressure = this.formatter.format(this.editingPlan.fullLoadPressure);
    this.emitUpdatePlanEvent();
  }

  handleIdlingPressureFormat() {
    this.editingPlan.idlingPressure = this.formatter.format(this.editingPlan.idlingPressure);
    this.emitUpdatePlanEvent();
  }

  handlePreInjectionPressureFormat() {
    this.editingPlan.preInjectionPressure = this.formatter.format(this.editingPlan.preInjectionPressure);
    this.emitUpdatePlanEvent();
  }

  //-------------------------------------------------------

  handleMinResistanceFormat() {
    this.editingPlan.minResistance         = this.formatter.format(this.editingPlan.minResistance);
    this.emitUpdatePlanEvent();
  }


  handleMinInductanceFormat() {
    this.editingPlan.minInductance         = this.formatter.format(this.editingPlan.minInductance);
    this.emitUpdatePlanEvent();
  }

  handleMinIsolationFormat() {
    this.editingPlan.minIsolation          = this.formatter.format(this.editingPlan.minIsolation);
    this.emitUpdatePlanEvent();
  }

  handleMinHalfLoadFormat() {
    this.editingPlan.minHalfLoad           = this.formatter.format(this.editingPlan.minHalfLoad);
    this.emitUpdatePlanEvent();
  }

  handleMinFullLoadFormat() {
    this.editingPlan.minFullLoad           = this.formatter.format(this.editingPlan.minFullLoad);
    this.emitUpdatePlanEvent();
  }

  handleMinIdlingFormat() {
    this.editingPlan.minIdling             = this.formatter.format(this.editingPlan.minIdling); 
    this.emitUpdatePlanEvent();
  }

  handleMinPreInjectionFormat() {
    this.editingPlan.minPreInjection       = this.formatter.format(this.editingPlan.minPreInjection);
    this.emitUpdatePlanEvent();
  }

  handleMinHalfLoadReturnFormat() {
    this.editingPlan.minHalfLoadReturn     = this.formatter.format(this.editingPlan.minHalfLoadReturn);
    this.emitUpdatePlanEvent();
  }

  handleMinFullLoadReturnFormat() {
    this.editingPlan.minFullLoadReturn     = this.formatter.format(this.editingPlan.minIdlingReturn);
    this.emitUpdatePlanEvent();
  }

  handleMinIdlingReturnFormat() {
    this.editingPlan.minIdlingReturn       = this.formatter.format(this.editingPlan.minIdlingReturn); 
    this.emitUpdatePlanEvent();
  }

  handleMinPreInjectionReturnFormat() {
    this.editingPlan.minPreInjectionReturn = this.formatter.format(this.editingPlan.minPreInjectionReturn);
    this.emitUpdatePlanEvent();
  }


}
