import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Vehicle } from 'src/app/model/vehicle.model';

@Component({
  selector: 'app-vehicle-table',
  templateUrl: './vehicle-table.component.html',
  styleUrls: ['./vehicle-table.component.css']
})
export class VehicleTableComponent {
  @Input() list: Vehicle[] = [];
  @Input() message: string = '';
  @Output() commandEvent = new EventEmitter<any>();
  @Output() showEvent = new EventEmitter();
  @Output() clearEvent = new EventEmitter();
 
  constructor() {

  }

  emitEditingEvent(vehicle: Vehicle) {
    let event = { command: 'editing', object: vehicle }
    this.commandEvent.emit(event);
  }

  emitRemovingEvent(vehicle: Vehicle) {
    let event = { command: 'removing', object: vehicle, class: Vehicle.name }
    this.commandEvent.emit(event);
  }

  clearAlertMessage() {
    this.clearEvent.emit();
  }

  showAlertMessage() {
    this.showEvent.emit();
  }
}
