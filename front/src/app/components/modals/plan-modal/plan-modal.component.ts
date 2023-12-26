import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Plan } from 'src/app/model/plan.model';
import { CommonPageComponent } from '../../commons/common-page/common-page.component';

@Component({
  selector: 'app-plan-modal',
  templateUrl: './plan-modal.component.html',
  styleUrls: ['./plan-modal.component.css']
})
export class PlanModalComponent extends CommonPageComponent {

  @Input() command: string = 'editing';
  @Input() list: Plan[] = [];
  @Input() message: string = '';
  
  @Output() commandEvent = new EventEmitter<any>();
  @Output() showEvent = new EventEmitter();
  @Output() clearEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter<Plan>();
  @Output() cancelButtonEvent = new EventEmitter();
  @Output() commandButtonEvent = new EventEmitter();

  constructor() {
    super();
  }

  clearAlertMessage() {
    this.clearEvent.emit();
  }

  showAlertMessage() {
    this.showEvent.emit();
  }

  emitUpdatePlanEvent() {
    this.updateEvent.emit(this.plan);
  }

  emitCommandEvent(event: any) {
    this.commandEvent.emit(event);
  }

  emitCancelButtonEvent() {
    console.log("emitCancelButtonEvent")
    this.cancelButtonEvent.emit();
  }


  emitCommandButtonEvent() {
    this.commandButtonEvent.emit();
  }
}
