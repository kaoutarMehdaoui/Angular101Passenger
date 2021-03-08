import { HttpErrorResponse } from "@angular/common/http";
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
    this.passengerService
    .getPassengers()
    .then((passengers) => {
      this.passengers = passengers;
    })
    .catch(this.logError);
  }
  editPassenger(passenger: Passenger) {
    this.passengerObservable = this.passengerService
      .editPassenger(passenger)
      .subscribe((passenger) => {
        this.passengers = this.passengers.map((p) =>
          passenger.id === p.id ? { ...passenger } : p
        );
      }, this.logError);
  }

  removePassenger(id: number) {
    this.passengerObservable = this.passengerService
      .removePassenger(id)
      .subscribe(() => {
        this.passengers = this.passengers.filter(
          (passenger) => passenger.id !== id
        );
      }, this.logError);
  }
  addNewPassenger(passenger:Passenger){
    this.passengers=this.passengers.concat([passenger]);
  }

  logError = (error: HttpErrorResponse) => console.error(error);
}