import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonPageComponent } from '../../commons/common-page/common-page.component';

@Component({
  selector: 'app-service-order-filter-modal',
  templateUrl: './service-order-filter-modal.component.html',
  styleUrls: ['./service-order-filter-modal.component.css']
})
export class ServiceOrderFilterModalComponent extends CommonPageComponent {
  
  filteredServiceOrder: string = '';

  @Input() message: string = '';
  @Output() clearEvent = new EventEmitter();
  @Output() filterEvent = new EventEmitter();

  constructor() {
    super();
  }

  emitClearAlertMessage() {
    this.clearEvent.emit();
  }

  emitServiceOrderFilter() {
    this.filterEvent.emit({field: 'serviceOrder', value: this.filteredServiceOrder});
  }
}
