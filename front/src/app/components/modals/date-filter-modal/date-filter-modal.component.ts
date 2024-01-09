import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonPageComponent } from '../../commons/common-page/common-page.component';

@Component({
  selector: 'app-date-filter-modal',
  templateUrl: './date-filter-modal.component.html',
  styleUrls: ['./date-filter-modal.component.css']
})
export class DateFilterModalComponent extends CommonPageComponent {
 
  filteredDate: string = '';

  @Input() message: string = '';
  @Output() clearEvent = new EventEmitter();
  @Output() filterEvent = new EventEmitter();

  constructor() {
    super();
  }

  emitClearAlertMessage() {
    this.clearEvent.emit();
  }

  emitDateFilter() {
    this.filterEvent.emit({field: 'date', value: this.filteredDate});
  }
}
