import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Test } from 'src/app/model/test.model';

@Component({
  selector: 'app-test-table',
  templateUrl: './test-table.component.html',
  styleUrls: ['./test-table.component.css']
})
export class TestTableComponent {

  @Input() list: Test[] = [];
  @Input() filteredField: any[] = [];
  @Output() resetFilterEvent = new EventEmitter<any>();    
  @Output() newEvent = new EventEmitter<Test>();
  @Output() commandEvent = new EventEmitter

  constructor() {}

  emitNewEvent(test: Test) {
    this.newEvent.emit(test);
  }

  emitEditEvent(test: Test) {
    let event = { command: 'editing', object: test, objClass: 'Test' }
    this.commandEvent.emit(event);
  }

  emitRemoveEvent(test: Test) {
    let event = { command: 'removing', object: test, objClass: 'Test' }
    this.commandEvent.emit(event);
  }

  emitResetFilterEvent(fieldName: string) {
    this.resetFilterEvent.emit({field: fieldName});
  }

  containsFilter(fieldName: string) {
    return this.filteredField.some(f => f.field === fieldName );
  }
}
