import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Vehicle } from 'src/app/model/vehicle.model';
import { CommonPageComponent } from '../../commons/common-page/common-page.component';

@Component({
  selector: 'app-vehicle-modal',
  templateUrl: './vehicle-modal.component.html',
  styleUrls: ['./vehicle-modal.component.css']
})
export class VehicleModalComponent extends CommonPageComponent{

  @Input() command: string = 'editing';
  @Input() list: Vehicle[] = [];
  @Input() message: string = '';
  
  @Output() commandEvent = new EventEmitter<any>();
  @Output() showEvent = new EventEmitter();
  @Output() clearEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter<Vehicle>();
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

  emitUpdateVehicleEvent() {
    this.updateEvent.emit(this.vehicle);
  }

  emitCommandEvent(event: any) {
    console.log("Vehicle Command Event\n: ", event);
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
