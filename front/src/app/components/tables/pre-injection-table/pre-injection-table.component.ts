import { Component, Input } from '@angular/core';
import { Plan } from 'src/app/model/plan.model';
import { Test } from 'src/app/model/test.model';
import { CommonPageComponent } from '../../commons/common-page/common-page.component';

@Component({
  selector: 'app-pre-injection-table',
  templateUrl: './pre-injection-table.component.html',
  styleUrls: ['./pre-injection-table.component.css']
})
export class PreInjectionTableComponent extends CommonPageComponent{
  
  constructor(){
    super();
  }
}
