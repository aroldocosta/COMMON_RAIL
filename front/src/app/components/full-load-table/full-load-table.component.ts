import { Component, Input } from '@angular/core';
import { Plan } from 'src/app/model/plan.model';
import { Test } from 'src/app/model/test.model';
import { CommonsComponent } from '../commons/commons.component';

@Component({
  selector: 'app-full-load-table',
  templateUrl: './full-load-table.component.html',
  styleUrls: ['./full-load-table.component.css']
})
export class FullLoadTableComponent extends CommonsComponent{
  
 
  constructor(){
    super();
  }
}
