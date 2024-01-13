import { Component, Input } from '@angular/core';
import { Plan } from 'src/app/model/plan.model';
import { Test } from 'src/app/model/test.model';
import { CommonPageComponent } from '../../commons/common-page/common-page.component';

@Component({
  selector: 'app-idling-table',
  templateUrl: './idling-table.component.html',
  styleUrls: ['./idling-table.component.css']
})
export class IdlingTableComponent extends CommonPageComponent {
  
  constructor(){
    super();
  }
}
