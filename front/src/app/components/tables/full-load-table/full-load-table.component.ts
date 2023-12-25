import { Component, Input } from '@angular/core';
import { Plan } from 'src/app/model/plan.model';
import { Test } from 'src/app/model/test.model';
import { CommonPageComponent } from '../../commons/common-page/common-page.component';

@Component({
  selector: 'app-full-load-table',
  templateUrl: './full-load-table.component.html',
  styleUrls: ['./full-load-table.component.css']
})
export class FullLoadTableComponent extends CommonPageComponent{
  
 
  constructor(){
    super();
  }
}
