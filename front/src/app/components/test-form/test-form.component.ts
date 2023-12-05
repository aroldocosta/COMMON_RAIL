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

    @Output() updateEvent = new EventEmitter<Test>();
    @Output() clearEvent = new EventEmitter();

    constructor(
      private formatter: FormatService
    ) {
    }

    ngOnInit() {
      this.editingTest.planId = '0';
      this.editingTest.injectorId = '0';
      this.editingTest.vehicleId = '0';
      let t = setTimeout(() => this.handleInputFormat(), 100);
    }

    emitClearMessage() {
      this.clearEvent.emit();
    }

    emitUpdateTestEvent() {
      this.updateEvent.emit(this.editingTest);
    }

    handleInputFormat() {
      this.editingTest.resistance         = this.formatter.format(this.editingTest.resistance);
      this.editingTest.inductance         = this.formatter.format(this.editingTest.inductance);
      this.editingTest.isolation          = this.formatter.format(this.editingTest.isolation);
      this.editingTest.halfLoad           = this.formatter.format(this.editingTest.halfLoad);
      this.editingTest.fullLoad           = this.formatter.format(this.editingTest.fullLoad);
      this.editingTest.idling             = this.formatter.format(this.editingTest.idling); 
      this.editingTest.preInjection       = this.formatter.format(this.editingTest.preInjection)
      this.editingTest.halfLoadReturn     = this.formatter.format(this.editingTest.halfLoadReturn);
      this.editingTest.fullLoadReturn     = this.formatter.format(this.editingTest.fullLoadReturn);
      this.editingTest.idlingReturn       = this.formatter.format(this.editingTest.idlingReturn); 
      this.editingTest.preInjectionReturn = this.formatter.format(this.editingTest.preInjectionReturn);
      this.emitUpdateTestEvent();
    }
}
