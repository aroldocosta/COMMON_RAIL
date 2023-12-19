import { Component, Input, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { CommonsComponent } from '../commons/commons.component';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent extends CommonsComponent{

  @Input() command: string = 'editing';
  @Input() list: User[] = [];
  @Input() message: string = '';
  @Output() commandEvent = new EventEmitter<any>();
  @Output() clearEvent = new EventEmitter();

  constructor() {
    super();
  }

  emitEditingEvent(user: User) {
    let event = { command: 'editing', object: user }
    this.commandEvent.emit(event);
  }

  emitRemovingEvent(user: User) {
    let event = { command: 'removing', object: user, objClass: 'User' }
    this.commandEvent.emit(event);
  }
}

