import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Injector } from 'src/app/model/injector.model';
import { Plan } from 'src/app/model/plan.model';

@Component({
  selector: 'app-injector-form',
  templateUrl: './injector-form.component.html',
  styleUrls: ['./injector-form.component.css']
})
export class InjectorFormComponent {

  @Input() planList: Plan[] = [];
  @Input() editingInjector: Injector = new Injector();
  @Output() clearEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter<Injector>();

  constructor() {

  }

  emitClearMessage() {
    this.clearEvent.emit();
  }

  emitUpdateInjectorEvent() {
    console.log('emitUpdateInjectorEvent: ' + JSON.stringify(this.editingInjector));
    this.updateEvent.emit(this.editingInjector);
  }
}
