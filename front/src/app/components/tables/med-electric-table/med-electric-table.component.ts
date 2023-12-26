import { Component, Input } from '@angular/core';
import { Plan } from 'src/app/model/plan.model';
import { Test } from 'src/app/model/test.model';
import { CommonPageComponent } from '../../commons/common-page/common-page.component';

@Component({
  selector: 'app-med-electric-table',
  templateUrl: './med-electric-table.component.html',
  styleUrls: ['./med-electric-table.component.css']
})
export class MedElectricTableComponent extends CommonPageComponent {
  
  @Input() showSequence: string = 'false';
  @Input() injectorNumber: string = '';

  constructor(){
    super()
  }

  ngOnInit() {
    this.resColor = this.drawColor(this.test.resistance, this.plan.maxResistance, this.plan.minResistance);
    this.rctColor = this.drawColor(this.test.reactance,  this.plan.maxReactance,  this.plan.minReactance);
    this.isoColor = this.drawColor(this.test.isolation,  this.plan.maxIsolation,  this.plan.minIsolation);
  }
}
