import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonPageComponent } from '../../commons/common-page/common-page.component';

@Component({
  selector: 'app-customer-filter-modal',
  templateUrl: './customer-filter-modal.component.html',
  styleUrls: ['./customer-filter-modal.component.css']
})
export class CustomerFilterModalComponent extends CommonPageComponent {

  filteredCustomer: string = '';

  @Input() message: string = '';
  @Output() clearEvent = new EventEmitter();
  @Output() filterEvent = new EventEmitter();

  constructor() {
    super();
  }

  emitClearAlertMessage() {
    this.clearEvent.emit();
  }

  emitCustomerFilter() {
    this.filterEvent.emit({field: 'customer', value: this.filteredCustomer});
  }
}
