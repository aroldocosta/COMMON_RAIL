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
    let t = setTimeout(() => this.handleInputFormat(), 100);
  }

  emitClearMessage() {
    this.clearEvent.emit();
  }

  emitUpdatePlanEvent() {
    this.updateEvent.emit(this.editingPlan);
  }

  handleInputFormat() {
    this.editingPlan.maxResistance         = this.formatter.format(this.editingPlan.maxResistance);
    this.editingPlan.maxInductance         = this.formatter.format(this.editingPlan.maxInductance);
    this.editingPlan.maxIsolation          = this.formatter.format(this.editingPlan.maxIsolation);
    this.editingPlan.maxHalfLoad           = this.formatter.format(this.editingPlan.maxIsolation);
    this.editingPlan.maxFullLoad           = this.formatter.format(this.editingPlan.maxFullLoad);
    this.editingPlan.maxIdling             = this.formatter.format(this.editingPlan.maxIdling); 
    this.editingPlan.maxPreInjection       = this.formatter.format(this.editingPlan.maxPreInjection)
    this.editingPlan.maxHalfLoadReturn     = this.formatter.format(this.editingPlan.maxHalfLoadReturn);
    this.editingPlan.maxFullLoadReturn     = this.formatter.format(this.editingPlan.maxIdlingReturn);
    this.editingPlan.maxIdlingReturn       = this.formatter.format(this.editingPlan.maxIdlingReturn); 
    this.editingPlan.maxPreInjectionReturn = this.formatter.format(this.editingPlan.maxPreInjectionReturn);

    this.editingPlan.minResistance         = this.formatter.format(this.editingPlan.minResistance);
    this.editingPlan.minInductance         = this.formatter.format(this.editingPlan.minInductance);
    this.editingPlan.minIsolation          = this.formatter.format(this.editingPlan.minIsolation);
    this.editingPlan.minHalfLoad           = this.formatter.format(this.editingPlan.minIsolation);
    this.editingPlan.minFullLoad           = this.formatter.format(this.editingPlan.minFullLoad);
    this.editingPlan.minIdling             = this.formatter.format(this.editingPlan.minIdling); 
    this.editingPlan.minPreInjection       = this.formatter.format(this.editingPlan.minPreInjection)
    this.editingPlan.minHalfLoadReturn     = this.formatter.format(this.editingPlan.minHalfLoadReturn);
    this.editingPlan.minFullLoadReturn     = this.formatter.format(this.editingPlan.minIdlingReturn);
    this.editingPlan.minIdlingReturn       = this.formatter.format(this.editingPlan.minIdlingReturn); 
    this.editingPlan.minPreInjectionReturn = this.formatter.format(this.editingPlan.minPreInjectionReturn);
  }
}
