import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Injector } from 'src/app/model/injector.model';
import { Plan } from 'src/app/model/plan.model';
import { CommonPageComponent } from '../../commons/common-page/common-page.component';

@Component({
  selector: 'app-injector-form',
  templateUrl: './injector-form.component.html',
  styleUrls: ['./injector-form.component.css']
})
export class InjectorFormComponent extends CommonPageComponent {

  @Input() planList: Plan[] = [];
  @Output() clearEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter<Injector>();

  constructor() {
    super()
  }

  emitClearMessage() {
    this.clearEvent.emit();
  }

  emitUpdateInjectorEvent() {
    this.updateEvent.emit(this.injector);
  }
}
