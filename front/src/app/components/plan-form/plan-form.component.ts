import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Plan } from 'src/app/model/plan.model';
import { FormatService } from 'src/app/services/format.service';
import { CommonsComponent } from '../commons/commons.component';

@Component({
  selector: 'app-plan-form',
  templateUrl: './plan-form.component.html',
  styleUrls: ['./plan-form.component.css']
})
export class PlanFormComponent extends CommonsComponent {

  @Input() planCommand: string = '';
  @Input() testDate: string = '';
  @Input() planList: any = [];
  @Input() vehicleList: any = [];
  @Input() injectorList: any = [];

  @Output() clearEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter<Plan>();


  constructor(
    private formatter: FormatService
  ) {
    super();
  }

  ngOnInit() {
    //let t = setTimeout(() => this.handleInputFormat(), 100);
  }

  emitClearMessage() {
    this.clearEvent.emit();
  }

  emitUpdatePlanEvent() {
    this.updateEvent.emit(this.plan);
  }
}
