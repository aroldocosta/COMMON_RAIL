import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonPageComponent } from '../../commons/common-page/common-page.component';

@Component({
  selector: 'app-remove-modal',
  templateUrl: './remove-modal.component.html',
  styleUrls: ['./remove-modal.component.css']
})
export class RemoveModalComponent extends CommonPageComponent{

  @Input() message: string = '';
  @Input() removingName: string = '';
  @Input() removingEvent: any;
  @Input() removingObjects: string = '';
  @Input() removingAlertTopTitle: string = '';
  @Input() removingAlertMessage01: string = '';
  @Input() removingAlertMessage02: string = '';

  @Output() clearEvent = new EventEmitter();
  @Output() cancelEvent = new EventEmitter();
  @Output() confirmEvent = new EventEmitter();

  constructor() {
    super();
  }

  emitConfirmRemoveButtonEvent() {
    this.confirmEvent.emit()
  }

  emitCancelRemoveButtonEvent() {
    this.cancelEvent.emit()
  }

  emitClearAlertMessage() {
    this.clearEvent.emit();
  }
}
