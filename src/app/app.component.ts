import { Component, VERSION } from "@angular/core";
import { CdkDragDrop, moveItemInArray, CdkDrag } from "@angular/cdk/drag-drop";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major + " dragable charts";

  charts = [
    {
      data: [
        { data: [26, 15, 25], label: "bar 1" },
        { data: [3, 10, 50], label: "bar 2" }
      ],
      labels: ["10:00", "10:27", "10:28"],
      type: "bar"
    },
    {
      data: [
        { data: [33, 10, 70], label: "line 1" },
        { data: [10, 50, 30], label: "line 2" }
      ],
      labels: ["10:00", "10:27", "10:28"],
      type: "line"
    },
    {
      data: [{ data: [3, 10, 7], label: "test 3" }],
      labels: ["10:00", "10:27", "10:28"],
      type: "doughnut"
    },
    {
      data: [{ data: [3, 10, 7], label: "test 3" }],
      labels: ["10:00", "10:27", "10:28"],
      type: "pie"
    }
  ];
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.charts, event.previousIndex, event.currentIndex);
  }
  barClick(event) {
    console.log(event);
  }
}
