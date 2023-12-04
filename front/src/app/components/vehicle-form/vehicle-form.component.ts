import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { Vehicle } from 'src/app/model/vehicle.model';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent {

  @Input() command: string = 'editing';
  @Input() userList: User[] = [];
  @Input() vehicleList: Vehicle[] = [];
  @Input() editingVehicle: Vehicle = new Vehicle();
  @Output() clearEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter<Vehicle>();
  
  constructor() {
    this.editingVehicle.ownerId = '0';
  }

  emitClearMessage() {
    this.clearEvent.emit();
  }

  emitUpdateVehicleEvent() {
    this.updateEvent.emit(this.editingVehicle);
  }
}
