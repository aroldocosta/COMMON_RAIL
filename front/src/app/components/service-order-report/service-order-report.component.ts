import { Component, EventEmitter, Output } from '@angular/core';
import { CommonsComponent } from '../commons/commons.component';

@Component({
  selector: 'app-service-order-report',
  templateUrl: './service-order-report.component.html',
  styleUrls: ['./service-order-report.component.css']
})
export class ServiceOrderReportComponent extends CommonsComponent {

  @Output() downloadEvent = new EventEmitter();

  constructor() {
    super()
  }

  download() {
    this.downloadEvent.emit();
  }
}
