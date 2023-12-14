import { Component, Input } from '@angular/core';
import { Plan } from 'src/app/model/plan.model';
import { Test } from 'src/app/model/test.model';
import { CommonsComponent } from '../commons/commons.component';

@Component({
  selector: 'app-med-electric-table',
  templateUrl: './med-electric-table.component.html',
  styleUrls: ['./med-electric-table.component.css']
})
export class MedElectricTableComponent extends CommonsComponent {
  
  @Input() resColor = ''; 
  @Input() rctColor = '';
  @Input() isoColor = '';
  @Input() tabTitle: string = 'TITLE';
  @Input() plan: Plan = new Plan();
  @Input() test: Test = new Test();

  constructor(){
    super()
  }

  ngOnInit() {
    this.resColor = this.drawColor(this.test.resistance, this.plan.maxResistance, this.plan.minResistance);
    this.rctColor = this.drawColor(this.test.reactance,  this.plan.maxReactance,  this.plan.minReactance);
    this.isoColor = this.drawColor(this.test.isolation,  this.plan.maxIsolation,  this.plan.minIsolation);
  }
}
