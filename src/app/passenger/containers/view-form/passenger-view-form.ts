import { Component, OnInit } from "@angular/core";
import { Passenger } from "src/assets/passengers";
import { PassengerService } from "../passenger.service"

@Component({
  selector: "form-viewer",
  templateUrl: "./passenger-view-form.html",
  styleUrls:["./passenger-view-form.html"]
})
export class PassengerFormViewerComponent implements OnInit {
    constructor(private passengerService: PassengerService) {}
  
    passenger: Passenger;
  
    ngOnInit() {
      this.passengerService
        .getPassenger(2)
        .subscribe((passenger) => (this.passenger = passenger));
    }
  
    editPassenger(passenger: Passenger) {
      this.passengerService
        .editPassenger(passenger)
        .subscribe((passenger) => console.log(passenger));
    }
  }