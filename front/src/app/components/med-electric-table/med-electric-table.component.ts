import { Component, Input } from '@angular/core';
import { Plan } from 'src/app/model/plan.model';
import { Test } from 'src/app/model/test.model';

@Component({
  selector: 'app-med-electric-table',
  templateUrl: './med-electric-table.component.html',
  styleUrls: ['./med-electric-table.component.css']
})
export class MedElectricTableComponent {
  
  @Input() resColor = ''; 
  @Input() rctColor = '';
  @Input() isoColor = '';
  @Input() tabTitle: string = 'TITLE';
  @Input() editingPlan: Plan = new Plan();
  @Input() editingTest: Test = new Test();

  constructor(){}
}
