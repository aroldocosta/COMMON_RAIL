import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Workshop } from 'src/app/model/workshop.model';
import { CommonsComponent } from '../commons/commons.component';

@Component({
  selector: 'app-workshop-form',
  templateUrl: './workshop-form.component.html',
  styleUrls: ['./workshop-form.component.css']
})
export class WorkshopFormComponent extends CommonsComponent {

  @Input() workshopList: Workshop[] = [];
  @Input() editingWorkshop: Workshop = new Workshop();
 
  @Output() clearEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter<Workshop>();

  constructor() {
    super();
  }

  emitClearMessage() {
    this.clearEvent.emit();
  }

  emitUpdateWorkshopEvent() {
    this.updateEvent.emit(this.editingWorkshop);
  }
}
