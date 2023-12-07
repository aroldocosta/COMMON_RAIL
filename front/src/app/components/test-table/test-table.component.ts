import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Filter } from 'src/app/model/filter.model';
import { Test } from 'src/app/model/test.model';

@Component({
  selector: 'app-test-table',
  templateUrl: './test-table.component.html',
  styleUrls: ['./test-table.component.css']
})
export class TestTableComponent {

  @Input() testList: Test[] = [];
  @Input() filteredField = 'serviceOrder';
  @Output() resetFilterEvent = new EventEmitter();    
  @Output() newEvent = new EventEmitter<Test>();
  @Output() editEvent = new EventEmitter<Test>();
  @Output() removeEvent = new EventEmitter<Test>();

  constructor() {}

  emitNewEvent(test: Test) {
    this.newEvent.emit(test);
  }

  emitEditEvent(test: Test) {
    this.editEvent.emit(test);
  }

  emitRemoveEvent(test: Test) {
    this.removeEvent.emit(test);
  }

  emitResetFilterEvent() {
    this.resetFilterEvent.emit();
  }
}
