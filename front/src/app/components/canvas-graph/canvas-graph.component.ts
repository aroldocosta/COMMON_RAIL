import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Plan } from 'src/app/model/plan.model';
import { Test } from 'src/app/model/test.model';
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
  @ViewChild('lineGraphCanvas', {static: false}) lineGraphCanvas!: ElementRef;
  debContxt!: CanvasRenderingContext2D;
  retContxt!: CanvasRenderingContext2D;
  lineGraphContxt!: CanvasRenderingContext2D;

  canvasHeight = 0;
  canvasWidth = 0;

  

  constructor() {
    super();
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

    let t = setInterval(() => {
      if(this.reportType == 'service-order') {
        this.debContxt = this.debCanvas.nativeElement.getContext('2d');
        this.retContxt = this.retCanvas.nativeElement.getContext('2d');
        this.drawGauge(this.debContxt, this.valDeb, this.maxDeb, this.minDeb);
        this.drawGauge(this.retContxt, this.valRet, this.maxRet, this.minRet);
      } else if(this.reportType == 'injector-number') {
        this.canvasWidth  = this.lineGraphCanvas.nativeElement.width;
        this.canvasHeight = this.lineGraphCanvas.nativeElement.height;
        this.lineGraphContxt = this.lineGraphCanvas.nativeElement.getContext('2d');
        this.drawLineGraph(this.lineGraphContxt, this.sequence);
      }
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

  drawLineGraph(contxt: CanvasRenderingContext2D, sequence: any[]) {
    this.drawCartesian(contxt, sequence);
    this.drawPolyline(contxt, sequence);
  }

  drawLine(contxt: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number, color: string, style: number) {  
    y1 = this.canvasHeight - y1;
    y2 = this.canvasHeight - y2;
    contxt.beginPath();
    contxt.moveTo(x1, y1);
    contxt.lineTo(x1, y1);
    contxt.lineTo(x2, y2);
    contxt.strokeStyle = color;
    contxt.lineWidth = style;
    contxt.stroke();
  }

  drawPolyline(contxt: CanvasRenderingContext2D, sequence: any) {

    console.log("Sequence: ", sequence);

    let max_deb  = (sequence[0]) ? sequence[0].maxDeb : 0;
    let min_deb  = (sequence[0]) ? sequence[0].minDeb : 0;
    let max_ret  = (sequence[0]) ? sequence[0].maxRet : 0;
    let min_ret  = (sequence[0]) ? sequence[0].minRet : 0;
    let c_range  = 0.6*this.canvasHeight;
    let c_offset = 0.2*this.canvasHeight; 
    this.drawRange(contxt, c_range, max_deb, min_deb, max_ret, min_ret, c_offset);
    this.drawFlow(contxt, sequence, c_range, max_deb, min_deb, c_offset);
    this.drawReturn(contxt, sequence, c_range, max_ret, min_ret, c_offset);
  }

  drawCartesian(contxt: CanvasRenderingContext2D, sequence: any) {
    contxt.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.drawLine(contxt, 0, 0, 0, this.canvasHeight, "green", 7);
    this.drawLine(contxt, this.canvasWidth, 0, this.canvasWidth, this.canvasHeight, "blue", 7);
    this.drawLine(contxt, 0, 0, this.canvasWidth, 0, "grey", 7);

    for(let i = 0; i < sequence.length; i++) {
      let x = i * (this.canvasWidth / (this.sequence.length-1));
      this.drawLine(contxt, x, 0, x, this.canvasHeight, "grey", 0.3);
    }
  }

  drawRange(contxt: CanvasRenderingContext2D, c_range: number, max_deb: number, min_deb: number, max_ret: number, min_ret: number,c_offset: number) {
    let n_max_deb = (c_range * (max_deb - min_deb) / (max_deb - min_deb)) + c_offset;
    let n_min_deb = (c_range * (min_deb - min_deb) / (max_deb - min_deb)) + c_offset;
  
    this.drawLine(contxt, 0, n_max_deb, this.canvasWidth, n_max_deb, "red", 0.5);
    this.drawLine(contxt, 0, n_min_deb, this.canvasWidth, n_min_deb, "yellow", 0.5);

    this.drawText(contxt, "Max: " + max_deb, 7, this.canvasHeight - n_max_deb - 5, "#333");
    this.drawText(contxt, "Min: " + min_deb, 7, this.canvasHeight - n_min_deb - 5, "#333");

    this.drawText(contxt, "Max: " + max_ret, this.canvasWidth - 44, this.canvasHeight - n_max_deb - 5, "#333");
    this.drawText(contxt, "Min: " + min_ret, this.canvasWidth - 44, this.canvasHeight - n_min_deb - 5, "#333");
  }

  drawFlow(contxt: CanvasRenderingContext2D, sequence: any, c_range: number, max_deb: number, min_deb: number, c_offset: number) {
    contxt.beginPath();

    if(sequence.length == 1) {
      let val_deb = (sequence[0]) ? sequence[0].deb : 0;
      let n_val_deb = c_range * (val_deb - min_deb) / (max_deb - min_deb) + c_offset;
      this.drawLine(contxt, 0, n_val_deb, this.canvasWidth, n_val_deb, "green", 1.0);
    } else {
      for(let i = 0; i < sequence.length; i++) {
        let x = i * (this.canvasWidth / (this.sequence.length-1));
        let val_deb = (sequence[i]) ? sequence[i].deb : 0;
        
        let n_val_deb = c_range - (c_range * (val_deb - min_deb) / (max_deb - min_deb)) + c_offset;

        contxt.lineTo(x, n_val_deb);
      }
    }
    contxt.strokeStyle = "green";
    contxt.lineWidth = 1;
    contxt.stroke();
  }

  drawReturn(contxt: CanvasRenderingContext2D, sequence: any, c_range: number, max_ret: number, min_ret: number, c_offset: number) { 
    contxt.beginPath();

    if(sequence.length == 1) {
      let val_ret = (sequence[0]) ? sequence[0].ret : 0;
      let n_val_ret = c_range * (val_ret - min_ret) / (max_ret - min_ret) + c_offset;
      this.drawLine(contxt, 0, n_val_ret, this.canvasWidth, n_val_ret, "blue", 1.0);
    } else {
      for(let i = 0; i < sequence.length; i++) {
        let x = i * (this.canvasWidth / (this.sequence.length-1));
        let val_ret = (sequence[i]) ? sequence[i].ret : 0;
        
        let n_val_ret = c_range - (c_range * (val_ret - min_ret) / (max_ret - min_ret)) + c_offset;

        contxt.lineTo(x, n_val_ret);
      }
    }
    contxt.strokeStyle = "blue";
    contxt.lineWidth = 1;
    contxt.stroke();
  }

  drawText(contxt: CanvasRenderingContext2D, text: string, x: number, y: number, color: string) {
    contxt.strokeStyle = color;
    contxt.strokeText(text, x, y);
    contxt.strokeText(text, x, y);
  } 
}