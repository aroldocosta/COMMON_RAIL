import { Component, Input } from '@angular/core';
import { Plan } from 'src/app/model/plan.model';
import { Test } from 'src/app/model/test.model';

@Component({
  selector: 'app-full-load-table',
  templateUrl: './full-load-table.component.html',
  styleUrls: ['./full-load-table.component.css']
})
export class FullLoadTableComponent {
  
  @Input() resColor = ''; 
  @Input() rctColor = '';
  @Input() isoColor = '';
  @Input() tabTitle: string = 'TITLE';
  @Input() editingPlan: Plan = new Plan();
  @Input() editingTest: Test = new Test();

  constructor(){}
}
