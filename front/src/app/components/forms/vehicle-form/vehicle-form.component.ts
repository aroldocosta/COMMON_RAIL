import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { Vehicle } from 'src/app/model/vehicle.model';
import { CommonPageComponent } from '../../commons/common-page/common-page.component';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent extends CommonPageComponent {

  @Input() command: string = 'editing';
  @Input() userList: User[] = [];
  @Input() vehicleList: Vehicle[] = [];
  @Output() clearEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter<Vehicle>();
  
  constructor() {
    super();
  }

  emitClearMessage() {
    this.clearEvent.emit();
  }

  emitUpdateVehicleEvent() {
    this.updateEvent.emit(this.vehicle);
  }
}
