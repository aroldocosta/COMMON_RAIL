import { Component, Input } from '@angular/core';
import { Plan } from 'src/app/model/plan.model';
import { Test } from 'src/app/model/test.model';
import { CommonsComponent } from '../commons/commons.component';

@Component({
  selector: 'app-half-load-table',
  templateUrl: './half-load-table.component.html',
  styleUrls: ['./half-load-table.component.css']
})
export class HalfLoadTableComponent extends CommonsComponent{
  
  constructor(){
    super();
  }
}
