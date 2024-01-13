import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Test } from 'src/app/model/test.model';
import { FormatService } from 'src/app/services/format.service';
import { CommonPageComponent } from '../../commons/common-page/common-page.component';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent extends CommonPageComponent {
   
    @Input() command: string = '';
    @Input() message: string = '';
    @Input() testDate: string = '';
    @Input() planList: any = [];
    @Input() vehicleList: any = [];
    @Input() injectorType: string = '';
    @Input() injectorList: any = [];
        
    @Output() tabbingEvent = new EventEmitter<any>();
    @Output() updateEvent = new EventEmitter<Test>();
    @Output() updatePlanEvent = new EventEmitter<Test>();
    @Output() updateInjectorEvent = new EventEmitter<Test>();
    @Output() createEvent = new EventEmitter<Test>();
    @Output() clearEvent = new EventEmitter();  

    numberList = [1, 2, 3, 4, 5, 6, 7, 8];

    constructor(
      private formatter: FormatService
    ) {
      super();
    }

    ngOnInit() {
    }
    emitClearMessage() {
      this.clearEvent.emit();
    }
    emitUpdateTestEvent() {
      this.updateEvent.emit(this.test);
    }

    emitUpdatePlanEvent() {
      this.updatePlanEvent.emit(this.test);
    }

    emitUpdateInjectorEvent() {
      this.updateInjectorEvent.emit(this.test);
    }
    emitCreateEvent(test: Test) {
      this.createEvent.emit(test);
    }
    handleStartingFormat() {
      this.emitUpdateTestEvent();
    }
    handleIdlingFormat() {
      this.emitUpdateTestEvent();
    }
    handleHalfLoadFormat() {
      this.emitUpdateTestEvent();
    }
    handleFullLoadFormat() {
      this.emitUpdateTestEvent();
    }
    handlePreInjectionFormat() {
      this.emitUpdateTestEvent();
    }

    handleStartingReturnFormat() {
      this.emitUpdateTestEvent();
    }
    handleIdlingReturnFormat() {
      this.emitUpdateTestEvent();
    }
    handleHalfLoadReturnFormat() {
      this.emitUpdateTestEvent();
    }
    handleFullLoadReturnFormat() {
      this.emitUpdateTestEvent();
    }
    handlePreInjectionReturnFormat() {
      this.emitUpdateTestEvent();
    }

    changeTab(tab: any) {
      this.tabbingEvent.emit(tab);
    }
    newTestFromServiceOrder() {
      this.test.id = '';
      this.createEvent.emit(this.test);
    }
}
