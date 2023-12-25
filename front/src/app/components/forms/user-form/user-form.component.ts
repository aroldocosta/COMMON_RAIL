import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { Workshop } from 'src/app/model/workshop.model';
import { CommonPageComponent } from '../../commons/common-page/common-page.component';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent extends CommonPageComponent{

  @Input() editingUser: User = new User();
  @Input() workshopList: Workshop[] = [];
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