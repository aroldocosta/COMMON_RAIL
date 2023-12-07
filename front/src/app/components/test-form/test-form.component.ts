import { formatNumber } from '@angular/common';
import { BootstrapOptions, Component, EventEmitter, Input, Output } from '@angular/core';
import { Test } from 'src/app/model/test.model';
import { FormatService } from 'src/app/services/format.service';

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

    @Output() tabbingEvent = new EventEmitter<any>();
    @Output() updateEvent = new EventEmitter<Test>();
    @Output() clearEvent = new EventEmitter();
    

    constructor(
      private formatter: FormatService
    ) {
    }

    ngOnInit() {
      let t = setTimeout(() => {
        //this.handleInputFormat();
      }, 500);
    }

    emitClearMessage() {
      this.clearEvent.emit();
    }

    emitUpdateTestEvent() {
      console.log("PlanId: " + this.editingTest.planId);
      this.updateEvent.emit(this.editingTest);
    }

    handleResistanceFormat() {
      this.editingTest.resistance         = this.formatter.format(this.editingTest.resistance);
      this.emitUpdateTestEvent();
    }

    handleInductanceFormat() {
      this.editingTest.inductance         = this.formatter.format(this.editingTest.inductance);
      this.emitUpdateTestEvent();
    }
    handleIsolationFormat() {
      this.editingTest.isolation          = this.formatter.format(this.editingTest.isolation);
      this.emitUpdateTestEvent();
    }
    handleHalfLoadFormat() {
      this.editingTest.halfLoad           = this.formatter.format(this.editingTest.halfLoad);
      this.emitUpdateTestEvent();
    }
    handleIdlingFormat() {
      this.editingTest.idling             = this.formatter.format(this.editingTest.idling); 
      this.emitUpdateTestEvent();
    }
    handleFullLoadFormat() {
      this.editingTest.fullLoad           = this.formatter.format(this.editingTest.fullLoad);
      this.emitUpdateTestEvent();
    }
    handlePreInjectionFormat() {
      this.editingTest.preInjection       = this.formatter.format(this.editingTest.preInjection);
      this.emitUpdateTestEvent();
    }
    handleHalfLoadReturnFormat() {
      this.editingTest.halfLoadReturn           = this.formatter.format(this.editingTest.halfLoadReturn);
      this.emitUpdateTestEvent();
    }
    handleIdlingReturnFormat() {
      this.editingTest.idlingReturn             = this.formatter.format(this.editingTest.idlingReturn); 
      this.emitUpdateTestEvent();
    }
    handleFullLoadReturnFormat() {
      this.editingTest.fullLoadReturn           = this.formatter.format(this.editingTest.fullLoadReturn);
      this.emitUpdateTestEvent();
    }
    handlePreInjectionReturnFormat() {
      this.editingTest.preInjectionReturn       = this.formatter.format(this.editingTest.preInjectionReturn);
      this.emitUpdateTestEvent();
    }

    changeTab(tab: any) {
      this.tabbingEvent.emit(tab);
    }
}
