import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Plan } from 'src/app/model/plan.model';

@Component({
  selector: 'app-plan-table',
  templateUrl: './plan-table.component.html',
  styleUrls: ['./plan-table.component.css']
})
export class PlanTableComponent {

  @Input() command: string = 'editing';
  @Input() list: Plan[] = [];
  @Input() message: string = '';
  @Output() commandEvent = new EventEmitter<any>();
  @Output() showEvent = new EventEmitter();
  @Output() clearEvent = new EventEmitter();

  constructor() {

  }

  clearAlertMessage() {
    this.clearEvent.emit();
  }

  showAlertMessage() {
    this.showEvent.emit();
  }

  emitEditingEvent(plan: any) {
    let event = { command: 'editing', object: plan }
    this.commandEvent.emit(event);
  }

  emitRemovingEvent(plan: any) {
    let event = { command: 'removing', object: plan, objClass: 'Plan' }
    this.commandEvent.emit(event);
  }

  confirmRemove() {
    alert("Remove confirmation");
  }
}
