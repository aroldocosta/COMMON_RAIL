import { Component, Input } from '@angular/core';
import { Plan } from 'src/app/model/plan.model';
import { Test } from 'src/app/model/test.model';
import { CommonPageComponent } from '../commons/common-page/common-page.component';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent extends CommonPageComponent {

  constructor(){
    super();
  }
}
