import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonPageComponent } from '../../commons/common-page/common-page.component';

@Component({
  selector: 'app-inj-number-filter-modal',
  templateUrl: './inj-number-filter-modal.component.html',
  styleUrls: ['./inj-number-filter-modal.component.css']
})
export class InjNumberFilterModalComponent extends CommonPageComponent {


  filteredInjectorNumber: string = '';

  @Input() message: string = '';
  @Output() clearEvent = new EventEmitter();
  @Output() filterEvent = new EventEmitter();

  constructor() {
    super();
  }

  emitClearAlertMessage() {
    this.clearEvent.emit();
  }

  emitInjectorNumberFilter() {
    debugger
    this.filterEvent.emit(this.filteredInjectorNumber);
  }
}
