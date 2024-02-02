import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonPageComponent } from '../../commons/common-page/common-page.component';

@Component({
  selector: 'app-injector-number-report',
  templateUrl: './injector-number-report.component.html',
  styleUrls: ['./injector-number-report.component.css']
})
export class InjectorNumberReportComponent extends CommonPageComponent {

  @Input() currentWorkshop: any;
  @Input() startingSequence: any;
  @Input() idlingSequence: any;
  @Input() halfLoadSequence: any;
  @Input() injectorNumber: any;
  @Input() fullLoadSequence: any;
  @Input() preInjectionSequence: any;
  @Output() downloadEvent = new EventEmitter();

  logoImagePath: string = "";

  constructor() {
    super();
    this.reportClass = "reportClass";
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
