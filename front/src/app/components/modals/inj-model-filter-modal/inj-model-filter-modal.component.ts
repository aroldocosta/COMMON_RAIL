import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonPageComponent } from '../../commons/common-page/common-page.component';

@Component({
  selector: 'app-inj-model-filter-modal',
  templateUrl: './inj-model-filter-modal.component.html',
  styleUrls: ['./inj-model-filter-modal.component.css']
})
export class InjModelFilterModalComponent extends CommonPageComponent {

  filteredInjectorModel: string = '';

  @Input() message: string = '';
  @Output() clearEvent = new EventEmitter();
  @Output() filterEvent = new EventEmitter();

  constructor() {
    super();
  }

  emitClearAlertMessage() {
    this.clearEvent.emit();
  }

  emitInjectorModelFilter() {
    this.filterEvent.emit({field: 'injectorModel', value: this.filteredInjectorModel});
  }
}
