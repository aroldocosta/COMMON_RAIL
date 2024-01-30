import Chart from 'chart.js/auto';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
// import { Plan } from 'src/app/model/plan.model';
// import { Test } from 'src/app/model/test.model';
import { CommonPageComponent } from '../commons/common-page/common-page.component';

@Component({
  selector: 'app-canvas-graph',
  templateUrl: './canvas-graph.component.html',
  styleUrls: ['./canvas-graph.component.css']
})
export class CanvasGraphComponent extends CommonPageComponent {

  @Input() valDeb: string = '';
  @Input() maxDeb: string = '';
  @Input() minDeb: string = '';
  @Input() valRet: string = '';
  @Input() maxRet: string = '';
  @Input() minRet: string = '';
  @Input() canvasId: string = '';

  gaugeH = 0;
  gaugeY = 135;

  @Input() graphClass = '';
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

  ngAfterViewInit(): void {

    let t = setInterval(() => {
     if(this.reportType == 'service-order') {
        this.debContxt = this.debCanvas.nativeElement.getContext('2d');
        this.retContxt = this.retCanvas.nativeElement.getContext('2d');
        this.drawGauge(this.debContxt, this.valDeb, this.maxDeb, this.minDeb);
        this.drawGauge(this.retContxt, this.valRet, this.maxRet, this.minRet);
     } else if(this.reportType == 'injector-number') {
        this.drawLineGraph(this.sequence)
     }
    }, 1000);   
  }

  drawLineGraph(dataSet: any) {

    let labelSet = [];
    let debitSet = [];
    let returnSet = [];

    if(dataSet.length == 1) dataSet.push(dataSet[0]);
    
    for(let i = 0; i < dataSet.length; i++) {
      console.log("Deb: " + dataSet[i].deb);
      debitSet.push(dataSet[i].deb);
      returnSet.push(dataSet[i].ret);
      labelSet.push(i+1);
    } 
    
    this.lineGraphContxt = this.lineGraphCanvas.nativeElement.getContext('2d');
    
    new Chart(this.lineGraphContxt, {
      type: 'line',
      data: {
        labels: labelSet,
        datasets: [{
          cubicInterpolationMode: 'monotone',
          label: 'Debito',
          data: debitSet,
          borderWidth: 1,
          yAxisID: 'y'
        },
        {
          cubicInterpolationMode: 'monotone',
          label: 'Retorno',
          data: returnSet,
          borderWidth: 1,
          yAxisID: 'y1'
        }]
      },
      
      options: {
        responsive: true,
        scales: {
          y: {
            type: 'linear',
            display: true,
            position: 'left'
          },
          y1: {
            type: 'linear',
             display: true,
            position: 'right',
            grid: {
              drawOnChartArea: false,
            }
          }
        },
      }
    })
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