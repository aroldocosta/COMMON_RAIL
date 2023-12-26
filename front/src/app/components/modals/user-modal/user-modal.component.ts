import { Component, EventEmitter, Injector, Input, Output } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { Workshop } from 'src/app/model/workshop.model';
import { CommonPageComponent } from '../../commons/common-page/common-page.component';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.css']
})
export class UserModalComponent extends CommonPageComponent {

    @Input() command: string = 'editing';
    @Input() list: User[] = [];
    @Input() workshopList: Workshop[] = [];
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
  
    emitUpdateUserEvent(user: any) {
      this.updateEvent.emit(user);
    }
  
    emitCommandEvent(event: any) {
      this.commandEvent.emit(event);
    }
  
    emitCancelButtonEvent() {
      this.cancelButtonEvent.emit();
    }
  
  
    emitCommandButtonEvent() {
      this.commandButtonEvent.emit();
    }
}
