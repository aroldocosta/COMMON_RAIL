import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Test } from 'src/app/model/test.model';

@Component({
  selector: 'app-test-table',
  templateUrl: './test-table.component.html',
  styleUrls: ['./test-table.component.css']
})
export class TestTableComponent {

  @Input()  tableData: Test[] = [];

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

}
