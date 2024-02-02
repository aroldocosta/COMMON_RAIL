import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { Workshop } from 'src/app/model/workshop.model';
import { CommonPageComponent } from '../../commons/common-page/common-page.component';

@Component({
  selector: 'app-workshop-modal',
  templateUrl: './workshop-modal.component.html',
  styleUrls: ['./workshop-modal.component.css']
})
export class WorkshopModalComponent extends CommonPageComponent {
  @Input() command: string = 'editing';
  @Input() list: Workshop[] = [];
  @Input() message: string = '';
  
  @Output() commandEvent = new EventEmitter<any>();
  @Output() showEvent = new EventEmitter();
  @Output() clearEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter<Workshop>();
  // @Output() uploadEvent = new EventEmitter<Workshop>();
  @Output() cancelButtonEvent = new EventEmitter();
  @Output() commandButtonEvent = new EventEmitter();
  @Output() fileChangeEvent = new EventEmitter();
  @Output() uploadFormEvent = new EventEmitter();

  logoImagePath: string = "";

  constructor() {
    super();
  }

  ngOnChanges() {
    console.log("WorkshopModal.ngOnChanges: " + this.workshop.logo);
    if(this.workshop.id) {
      this.logoImagePath = "assets/img/logos/" + this.workshop.logo;
    }
  }

  clearAlertMessage() {
    this.clearEvent.emit();
  }

  showAlertMessage() {
    this.showEvent.emit();
  }

  emitUpdateWorkshopEvent() {
    this.updateEvent.emit(this.workshop);
  }

  emitFileChangeEvent(event: any) {
    const file: File = <File>event.target.files[0];
    this.fileChangeEvent.emit(file);
  }

  emitOpenUploadFormEvent() {
    this.uploadFormEvent.emit();
  }

  emitCommandEvent(event: any) {
    this.commandEvent.emit(event);
  }

  emitCancelButtonEvent() {
    this.cancelButtonEvent.emit();
  }

  emitCommandButtonEvent() {
    this.commandButtonEvent.emit();
  }
}
