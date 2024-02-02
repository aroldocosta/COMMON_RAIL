import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonPageComponent } from '../../commons/common-page/common-page.component';

@Component({
  selector: 'app-service-order-report',
  templateUrl: './service-order-report.component.html',
  styleUrls: ['./service-order-report.component.css']
})
export class ServiceOrderReportComponent extends CommonPageComponent {

  @Input() currentWorkshop: any;
  @Output() downloadEvent = new EventEmitter();
  logoImagePath: string = "";

  graphClass='bigBeaker';
  constructor() {
    super();
  }

  ngOnInit() {
    this.reportClass="reportClass";
  }

  ngOnChanges() {
    if(this.workshop && this.workshop.id) {
      this.logoImagePath = "assets/img/logos/" + this.workshop.logo;
    }
  }

  download() {
    this.downloadEvent.emit();
  }
}
