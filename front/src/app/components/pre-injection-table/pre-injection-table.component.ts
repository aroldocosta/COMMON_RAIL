import { Component, Input } from '@angular/core';
import { Plan } from 'src/app/model/plan.model';
import { Test } from 'src/app/model/test.model';

@Component({
  selector: 'app-pre-injection-table',
  templateUrl: './pre-injection-table.component.html',
  styleUrls: ['./pre-injection-table.component.css']
})
export class PreInjectionTableComponent {
  
  @Input() resColor = ''; 
  @Input() rctColor = '';
  @Input() isoColor = '';
  @Input() tabTitle: string = 'TITLE';
  @Input() editingPlan: Plan = new Plan();
  @Input() editingTest: Test = new Test();

  constructor(){}
}
