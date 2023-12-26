import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Workshop } from 'src/app/model/workshop.model';
import { CommonPageComponent } from '../../commons/common-page/common-page.component';

@Component({
  selector: 'app-workshop-modal',
  templateUrl: './workshop-modal.component.html',
  styleUrls: ['./workshop-modal.component.css']
})
export class WorkshopModalComponent extends CommonPageComponent {
  @Input() command: string = 'editing';
  @Input() list: Workshop[] = [];
  @Input() message: string = '';
  
  @Output() commandEvent = new EventEmitter<any>();
  @Output() showEvent = new EventEmitter();
  @Output() clearEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter<Workshop>();
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

  emitUpdateWorkshopEvent(workshop: any) {
    this.updateEvent.emit(workshop);
  }

  emitCommandEvent(event: any) {
    this.commandEvent.emit(event);
  }

  emitCancelButtonEvent() {
    this.cancelButtonEvent.emit();
  }


  emitCommandButtonEvent() {
    this.commandButtonEvent.emit();
  }
}
