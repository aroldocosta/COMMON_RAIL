import { Component, Input } from '@angular/core';
import { Plan } from 'src/app/model/plan.model';
import { Test } from 'src/app/model/test.model';
import { CommonsComponent } from '../commons/commons.component';

@Component({
  selector: 'app-pre-injection-table',
  templateUrl: './pre-injection-table.component.html',
  styleUrls: ['./pre-injection-table.component.css']
})
export class PreInjectionTableComponent extends CommonsComponent{
  
  constructor(){
    super();
  }
}
