import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Workshop } from 'src/app/model/workshop.model';
import { CommonPageComponent } from '../../commons/common-page/common-page.component';

@Component({
  selector: 'app-workshop-form',
  templateUrl: './workshop-form.component.html',
  styleUrls: ['./workshop-form.component.css']
})
export class WorkshopFormComponent extends CommonPageComponent {

  @Input() workshopList: Workshop[] = [];
  @Output() clearEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter<Workshop>();

  constructor() {
    super();
  }

  emitClearMessage() {
    this.clearEvent.emit();
  }

  emitUpdateWorkshopEvent() {
    this.updateEvent.emit(this.workshop);
  }
}
