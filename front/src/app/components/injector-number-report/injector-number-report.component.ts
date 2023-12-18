import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonsComponent } from '../commons/commons.component';

@Component({
  selector: 'app-injector-number-report',
  templateUrl: './injector-number-report.component.html',
  styleUrls: ['./injector-number-report.component.css']
})
export class InjectorNumberReportComponent extends CommonsComponent {
  @Input() halfLoadSequence: any;
  @Input() idlingSequence: any;
  @Input() injectorNumber: any;
  @Input() fullLoadSequence: any;
  @Input() preInjectionSequence: any;

  @Output() downloadEvent = new EventEmitter();

  constructor() {
    super()
  }

  download() {
    this.downloadEvent.emit();
  }
}
