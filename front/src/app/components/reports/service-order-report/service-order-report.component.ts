import { Component, EventEmitter, Output } from '@angular/core';
import { CommonPageComponent } from '../../commons/common-page/common-page.component';

@Component({
  selector: 'app-service-order-report',
  templateUrl: './service-order-report.component.html',
  styleUrls: ['./service-order-report.component.css']
})
export class ServiceOrderReportComponent extends CommonPageComponent {

  @Output() downloadEvent = new EventEmitter();

  constructor() {
    super()
  }

  download() {
    this.downloadEvent.emit();
  }
}
