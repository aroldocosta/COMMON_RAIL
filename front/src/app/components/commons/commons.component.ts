import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-commons',
  templateUrl: './commons.component.html',
  styleUrls: ['./commons.component.css']
})
export class CommonsComponent {

  formData?: any;
  logged: any = new User();
  errors = "";
  DUPLICATED_KEY = "DUPLICATED_KEY";
  UNKNOWN_ERROR  = "UNKNOWN_ERROR";

  constructor() {

  }

  goToLink(link: string, login: LoginService, router: Router) {
    if(link == "/logout") {
      login.setAuthData(null);
      router.navigateByUrl("/login");
    } else {
      router.navigateByUrl(link);
    } 
  }

  isAuthenticated(login: LoginService, router: Router): boolean {
    if(!login.isAuthenticated()) {
      router.navigateByUrl("/login");
      return false;
    } else {
      return true;
    }
  }

  getColor(val: number, max: number, min: number) {
    let red = 0;
    let grn = 0;
    let blu = 0;   
    let n_val = 100*val/max;
    let n_min = 100*min/max;
    let n_max = 100;
    let n_ref = 100*((max+min)/2)/max;
    let med1 = (n_ref + n_min)/2;
    let med2 = (n_ref + n_max)/2;

    if(val < min) {
      red = 255;
      grn = 255;
      blu = 0;
    } else if(val > max) {
      red = 255;
      grn = 0;
      blu = 0;
    } else { 
      if(n_val < med1) {//greenyellow
        red = 173;
        grn = 255;
        blu = 47;
        //rrgb(173,255,47)
      } else if(n_val < med2) { //green - rgb(0,255,0)
        red = 0;
        grn = 255;
        blu = 0;
      } else if(n_val <= n_max) {//orange - rgb(255,140,0)
        red = 255;
        grn = 140;
        blu = 0;
      }
    }
    let color = {red: red, grn: grn, blu: blu};
    return color;
  }

  drawColor(value: string, maxValue: string, minValue: string) {
    let val = Number(value);
    let min = (minValue != null) ? Number(minValue) : 0;
    let max = (maxValue != null) ? Number(maxValue) : 0;   
    let color = this.getColor(val, max, min);

    if(max <= min && val >= min) {color.red = 0; color.grn = 255; color.blu = 0}

    return `text-shadow: 1px 1px 2px black; color: rgb(${color.red}, ${color.grn}, ${color.blu}); `;
  }
}