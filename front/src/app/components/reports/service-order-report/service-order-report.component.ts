import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonPageComponent } from '../../commons/common-page/common-page.component';

@Component({
  selector: 'app-service-order-report',
  templateUrl: './service-order-report.component.html',
  styleUrls: ['./service-order-report.component.css']
})
export class ServiceOrderReportComponent extends CommonPageComponent {

  @Input() logoPath = '';
  @Input() currentWorkshop: any;
  @Output() downloadEvent = new EventEmitter();

  graphClass='bigBeaker';
  constructor() {
    super();
  }

  ngOnInit() {
    this.reportClass="reportClass";
  }

  download() {
    this.downloadEvent.emit();
  }
}
