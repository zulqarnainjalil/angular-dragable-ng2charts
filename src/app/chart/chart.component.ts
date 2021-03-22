import { Component, OnInit, Input,Output,EventEmitter } from "@angular/core";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.css"]
})
export class ChartComponent implements OnInit {
  constructor() {}
  public labelMFL: Array<any>;
  ngOnInit() {
    this.labelMFL = [
      { data: this.chartData.data, label: this.chartData.dataLabel }
    ];
  }

  // public SystemName: string = "MF1";
  @Input() chartData;
  @Output() onBarClick: EventEmitter<any> = new EventEmitter();
  // @Input() chartData;
  // @Input() chartLabels;

  // firstCopy = false;

  public ChartOptions: any = {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            max: 60,
            min: 0
          }
        }
      ],
      xAxes: [{}]
    },
    plugins: {
      datalabels: {
        display: true,
        align: "top",
        anchor: "end",
        //color: "#2756B3",
        color: "#222",

        font: {
          family: "FontAwesome",
          size: 14
        }
      },
      deferred: false
    }
  };

  _lineChartColors: Array<any> = [
    {
      backgroundColor: "red",
      borderColor: "red",
      pointBackgroundColor: "red",
      pointBorderColor: "red",
      pointHoverBackgroundColor: "red",
      pointHoverBorderColor: "red"
    }
  ];

  public chartClicked(e: any): void {
    if(e.active.length)
    this.onBarClick.emit(e.active);
  }
  public chartHovered(e: any): void {
    console.log(e);
  }
}
