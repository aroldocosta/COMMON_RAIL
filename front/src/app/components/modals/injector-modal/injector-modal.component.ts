import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Injector } from 'src/app/model/injector.model';
import { Plan } from 'src/app/model/plan.model';
import { CommonPageComponent } from '../../commons/common-page/common-page.component';

@Component({
  selector: 'app-injector-modal',
  templateUrl: './injector-modal.component.html',
  styleUrls: ['./injector-modal.component.css']
})
export class InjectorModalComponent extends CommonPageComponent {
  @Input() command: string = 'editing';
  @Input() list: Injector[] = [];
  @Input() planList: Plan[] = [];
  @Input() message: string = '';
  
  @Output() commandEvent = new EventEmitter<any>();
  @Output() showEvent = new EventEmitter();
  @Output() clearEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter<Injector>();
  @Output() cancelButtonEvent = new EventEmitter();
  @Output() commandButtonEvent = new EventEmitter();
  
  constructor() {
    super();
  }
  clearAlertMessage() {
    this.clearEvent.emit();
  }

  showAlertMessage() {
    this.showEvent.emit();
  }

  emitUpdateInjectorEvent(injector: any) {
    this.updateEvent.emit(injector);
  }

  emitCommandEvent(event: any) {
    console.log("Injector Command Event\n: ", event);
    this.commandEvent.emit(event);
  }

  emitCancelButtonEvent() {
    console.log("emitCancelButtonEvent")
    this.cancelButtonEvent.emit();
  }


  emitCommandButtonEvent() {
    this.commandButtonEvent.emit();
  }
}
