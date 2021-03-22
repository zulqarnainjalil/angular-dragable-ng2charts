import { Component, VERSION } from "@angular/core";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { CdkDragDrop, moveItemInArray, CdkDrag } from "@angular/cdk/drag-drop";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major + " dragable charts";

  movies = [
    "Episode I - The Phantom Menace",
    "Episode II - Attack of the Clones",
    "Episode III - Revenge of the Sith",
    "Episode IV - A New Hope",
    "Episode V - The Empire Strikes Back",
    "Episode VI - Return of the Jedi",
    "Episode VII - The Force Awakens",
    "Episode VIII - The Last Jedi",
    "Episode IX – The Rise of Skywalker"
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

  //======================== Chart ========================

  public SystemName: string = "MF1";
  firstCopy = false;

  // data
  public lineChartData: Array<number> = [1, 8, 49];

  public labelMFL: Array<any> = [
    { data: this.lineChartData, label: this.SystemName }
  ];
  // labels
  public lineChartLabels: Array<any> = ["10:00", "10:27", "10:28"];

  constructor() {}

  public lineChartOptions: any = {
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

  public ChartType = "bar";

  public chartClicked(e: any): void {
    console.log(e);
  }
  public chartHovered(e: any): void {
    console.log(e);
  }
}
