import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { CommonsComponent } from '../commons/commons.component';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent extends CommonsComponent{

  @Input() editingUser: User = new User();
  @Output() clearEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter<any>();

  constructor() {
    super();
  }

  emitClearMessage() {
    this.clearEvent.emit();
  }

  emitUpdateUserEvent() {
    this.updateEvent.emit(this.editingUser);
  }
}