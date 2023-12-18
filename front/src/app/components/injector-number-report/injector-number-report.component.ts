import { Component, Input } from '@angular/core';
import { CommonsComponent } from '../commons/commons.component';

@Component({
  selector: 'app-injector-number-report',
  templateUrl: './injector-number-report.component.html',
  styleUrls: ['./injector-number-report.component.css']
})
export class InjectorNumberReportComponent extends CommonsComponent {
  @Input() halfLoadSequence: any;
  @Input() idlingSequence: any;
  @Input() fullLoadSequence: any;
  @Input() preInjectionSequence: any;

  constructor() {
    super()
  }

  download() {
    
  }
}
