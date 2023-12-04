import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Plan } from 'src/app/model/plan.model';

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

  constructor() {}

  emitClearMessage() {
    this.clearEvent.emit();
  }

  emitUpdatePlanEvent() {
    this.updateEvent.emit(this.editingPlan);
  }
}
