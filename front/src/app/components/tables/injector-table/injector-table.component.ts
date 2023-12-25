import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Injector } from 'src/app/model/injector.model';

@Component({
  selector: 'app-injector-table',
  templateUrl: './injector-table.component.html',
  styleUrls: ['./injector-table.component.css']
})
export class InjectorTableComponent {
  @Input() list: Injector[] = [];
  @Input() message: string = '';
  @Output() commandEvent = new EventEmitter<any>();
  @Output() showEvent = new EventEmitter();
  @Output() clearEvent = new EventEmitter();
 
  constructor() {

  }

  emitEditingEvent(injector: Injector) {
    let event = { command: 'editing', object: injector }
    this.commandEvent.emit(event);
  }

  emitRemovingEvent(injector: Injector) {
    let event = { command: 'removing', object: injector, objClass: 'Injector' }
    this.commandEvent.emit(event);
  }

  clearAlertMessage() {
    this.clearEvent.emit();
  }

  showAlertMessage() {
    this.showEvent.emit();
  }
}
