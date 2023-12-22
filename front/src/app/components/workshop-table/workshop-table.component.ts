import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Workshop } from 'src/app/model/workshop.model';

@Component({
  selector: 'app-workshop-table',
  templateUrl: './workshop-table.component.html',
  styleUrls: ['./workshop-table.component.css']
})
export class WorkshopTableComponent {

  @Input() list: Workshop[] = [];
  @Input() message: string = '';
  @Output() commandEvent = new EventEmitter<any>();
  @Output() showEvent = new EventEmitter();
  @Output() clearEvent = new EventEmitter();
 
  constructor() {

  }

  emitEditingEvent(workshop: Workshop) {
    debugger
    let event = { command: 'editing', object: workshop }
    this.commandEvent.emit(event);
  }

  emitRemovingEvent(workshop: Workshop) {
    let event = { command: 'removing', object: workshop, objClass: 'Workshop' }
    this.commandEvent.emit(event);
  }

  clearAlertMessage() {
    this.clearEvent.emit();
  }

  showAlertMessage() {
    this.showEvent.emit();
  }
}
