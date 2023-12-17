import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonsComponent } from '../commons/commons.component';

@Component({
  selector: 'app-canvas-graph',
  templateUrl: './canvas-graph.component.html',
  styleUrls: ['./canvas-graph.component.css']
})
export class CanvasGraphComponent extends CommonsComponent {

  @Input() valDeb: string = '';
  @Input() maxDeb: string = '';
  @Input() minDeb: string = '';
  @Input() valRet: string = '';
  @Input() maxRet: string = '';
  @Input() minRet: string = '';

  gaugeH = 0;
  gaugeY = 135;

  @ViewChild('debCanvas', {static: false}) debCanvas!: ElementRef;
  @ViewChild('retCanvas', {static: false}) retCanvas!: ElementRef;
  deb_Contxt!: CanvasRenderingContext2D;
  ret_Contxt!: CanvasRenderingContext2D;

  constructor() {
    super();
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.deb_Contxt = this.debCanvas.nativeElement.getContext('2d');
    this.ret_Contxt = this.retCanvas.nativeElement.getContext('2d');

    let t = setInterval(() => {
      this.drawGauge(this.deb_Contxt, this.valDeb, this.maxDeb, this.minDeb);
      this.drawGauge(this.ret_Contxt, this.valRet, this.maxRet, this.minRet);
    }, 100);
   
  }

  drawGauge(contxt: CanvasRenderingContext2D, value: string, maxValue: string, minValue: string) {
    let colHeight = 130;
    let val = Number(value);
    let min = Number(minValue);
    let max = Number(maxValue);
    let ref = (max + min) / 2;

    let n_val = 100*val/max;
    let col  = (colHeight * n_val / 100);
    let color = this.getColor(val, max, min);

    this.gaugeY = colHeight - col+10;
    this.gaugeH = col;
    
    contxt.clearRect(0, 0, this.debCanvas.nativeElement.width, this.debCanvas.nativeElement.height);
    contxt.clearRect(0, 0, this.retCanvas.nativeElement.width, this.retCanvas.nativeElement.height);

    contxt.beginPath();
    contxt.lineWidth = 6;
    contxt.fillStyle = `rgb(${color.red}, ${color.grn}, ${color.blu})`;
    contxt.fillRect(115, this.gaugeY, 76, this.gaugeH);
    contxt.stroke();

    let n_max = 100*max/max;
    let n_min = 100*min/max;
    let n_ref = 100*ref/max;

    let c_max = colHeight - (colHeight * n_max / 100) + 10;
    let c_min = colHeight - (colHeight * n_min / 100) + 10;
    let c_ref = colHeight - (colHeight * n_ref / 100) + 10;

    let x_1 = 205;
    let x_2 = 225;

    contxt.beginPath();
    contxt.lineTo(x_1, c_min);
    contxt.lineTo(x_2, c_min);
    contxt.strokeStyle = "orange";
    contxt.lineWidth = 1;
    contxt.stroke();

    contxt.beginPath();
    contxt.lineTo(x_1, c_ref);
    contxt.lineTo(x_2, c_ref);
    contxt.strokeStyle = "green";
    contxt.lineWidth = 1;
    contxt.stroke();

    contxt.beginPath();
    contxt.lineTo(x_1, c_max);
    contxt.lineTo(x_2, c_max);
    contxt.strokeStyle = "red";
    contxt.lineWidth = 1;
    contxt.stroke();

    contxt.font = "12px Monospace";
    contxt.fillStyle = "darkblue";
    contxt.fillText(min.toFixed(1), x_2+3, c_min);
    contxt.fillText(ref.toFixed(1), x_2+3, c_ref);
    contxt.fillText(max.toFixed(1), x_2+3, c_max);
  }
}
