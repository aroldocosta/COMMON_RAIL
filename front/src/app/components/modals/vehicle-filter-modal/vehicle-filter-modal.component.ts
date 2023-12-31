import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonPageComponent } from '../../commons/common-page/common-page.component';

@Component({
  selector: 'app-vehicle-filter-modal',
  templateUrl: './vehicle-filter-modal.component.html',
  styleUrls: ['./vehicle-filter-modal.component.css']
})
export class VehicleFilterModalComponent extends CommonPageComponent {
  
  filteredVehicle: string = '';

  @Input() message: string = '';
  @Output() clearEvent = new EventEmitter();
  @Output() filterEvent = new EventEmitter();

  constructor() {
    super();
  }

  emitClearAlertMessage() {
    this.clearEvent.emit();
  }

  emitVehicleFilterEvent() {
    this.filterEvent.emit({field: 'vehicle', value: this.filteredVehicle});
  }
}
