import { Component } from '@angular/core';
import { CommonsComponent } from '../commons/commons.component';

@Component({
  selector: 'app-injector-number-report',
  templateUrl: './injector-number-report.component.html',
  styleUrls: ['./injector-number-report.component.css']
})
export class InjectorNumberReportComponent extends CommonsComponent {
  constructor() {
    super()
  }

  download() {
    
  }
}
