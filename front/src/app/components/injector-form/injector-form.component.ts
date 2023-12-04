import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Injector } from 'src/app/model/injector.model';

@Component({
  selector: 'app-injector-form',
  templateUrl: './injector-form.component.html',
  styleUrls: ['./injector-form.component.css']
})
export class InjectorFormComponent {

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
