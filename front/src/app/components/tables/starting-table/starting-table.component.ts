import { Component, Input } from '@angular/core';
import { CommonPageComponent } from '../../commons/common-page/common-page.component';

@Component({
  selector: 'app-starting-table',
  templateUrl: './starting-table.component.html',
  styleUrls: ['./starting-table.component.css']
})
export class StartingTableComponent extends CommonPageComponent {

  @Input() showSequence: string = 'false';
  @Input() injectorNumber: string = '';

  constructor() {
    super();
  }
}
