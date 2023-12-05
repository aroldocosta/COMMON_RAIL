import { formatNumber } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatService {

  constructor() { }

  format(input: string) {
    let temp = input ? String(input) : "0.00";
    temp = temp.replaceAll(".", "");
    temp = temp.replaceAll(",", "");
    let value = Number(temp)/100;
    return formatNumber(value, 'en-US', '1.2-2');
  }
}
