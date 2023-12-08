import { Component } from '@angular/core';

@Component({
  selector: 'app-top-message',
  templateUrl: './top-message.component.html',
  styleUrls: ['./top-message.component.css']
})
export class TopMessageComponent {

  messageFading = 100;
  messageHeight = "4.5em";
  status = "alert-danger";
  message = "";
  fading = 1;

  DANGER  = "alert-danger"
  WARNING = "alert-warning"
  SUCCESS = "alert-success"

  constructor() {

  }

  setAlertMessage(message: string, status: string, time: number) {
    this.messageFading = 1; 
    this.messageHeight = "4.5em";   
    this.message = message;
    this.status = status;
    let t = setTimeout(() => {
      this.setMessageFading();
      this.fading = 100;
    }, time);
  }

  setMessageFading() { 
    let t = setTimeout(() => {
      if(this.fading > 0) {
        this.fading = this.fading - 1;
        this.messageFading = this.fading / 100;

        if(this.fading < 25) {
          this.messageHeight = 10 * this.messageFading + "em";
        }

        this.setMessageFading();
      } else {
        this.message = "";
      }
    }, 10);
  }
}
