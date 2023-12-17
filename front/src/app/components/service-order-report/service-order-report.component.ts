import { Component } from '@angular/core';
import { CommonsComponent } from '../commons/commons.component';

@Component({
  selector: 'app-service-order-report',
  templateUrl: './service-order-report.component.html',
  styleUrls: ['./service-order-report.component.css']
})
export class ServiceOrderReportComponent extends CommonsComponent {

  constructor() {
    super()
  }

  download() {
    
  }
}
