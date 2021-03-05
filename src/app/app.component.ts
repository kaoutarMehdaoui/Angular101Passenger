import { Component } from "@angular/core";
import { passengers } from '../assets/passengers'
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  public passengers = passengers
}
 