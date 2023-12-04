import { BootstrapOptions, Component, EventEmitter, Input, Output } from '@angular/core';
import { Test } from 'src/app/model/test.model';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent {
   
    @Input() command: string = '';
    @Input() message: string = '';
    @Input() testDate: string = '';
    @Input() testList: any = [];
    @Input() planList: any = [];
    @Input() vehicleList: any = [];
    @Input() injectorList: any = [];
    @Input() editingTest: Test = new Test();

    @Output() updateEvent = new EventEmitter<Test>();
    @Output() clearEvent = new EventEmitter();

    constructor() {
      this.editingTest.planId = '0';
      this.editingTest.injectorId = '0';
      this.editingTest.vehicleId = '0';
    }

    emitClearMessage() {
      this.clearEvent.emit();
    }

    emitUpdateTestEvent() {
      this.updateEvent.emit(this.editingTest);
    }
}
