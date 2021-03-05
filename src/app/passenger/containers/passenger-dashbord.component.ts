import { Component, OnDestroy, OnInit } from "@angular/core";
import { from, Subscription } from "rxjs";
import { Passenger } from "src/assets/passengers";
import { PassengerService } from "./passenger.service";

@Component({
  selector: "component-dashbord",
  templateUrl: "./passenger-dashbord.component.html",
  styleUrls: ["./passenger-dashbord.component.css"],
})
export class PassengerDashbordComponent implements OnInit, OnDestroy {
  passengers = [];
  public passengerObservable: Subscription;
  constructor(private passengerService: PassengerService) {}
  ngOnDestroy() {
    this.passengerObservable.unsubscribe();
  }
  ngOnInit() {
    this.passengerObservable = this.passengerService
      .getPassengers()
      .subscribe((passengers) => {
        this.passengers = passengers;
      });
  }
  editPassenger(passenger: Passenger) {
    this.passengers = this.passengers.map((p) => {
      if (p.id === passenger.id) {
        return Object.assign({}, p, passenger);
      }
      return p;
    });
  }

  removePassenger(id: number) {
    this.passengers = this.passengers.filter(
      (passenger) => passenger.id !== id
    );
  }
}
