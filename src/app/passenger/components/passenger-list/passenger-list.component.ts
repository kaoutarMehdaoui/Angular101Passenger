import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Passenger } from "src/assets/passengers";
import { PassengersModule } from "../../passenger.module";
import { PassengerService } from "../../containers/passenger.service";

@Component({
  selector: "passenger-list",

  templateUrl: "./passenger-list.component.html",
  styleUrls: ["./passenger-list.component.css"],
})
export class PassengerListComponent {
  name = "toto";
  @Input() passengers;
  _list = [];
  @Output() edit: EventEmitter<Passenger> = new EventEmitter();
  @Output() remove: EventEmitter<number> = new EventEmitter();
  editing: boolean = false;
  passengerEmit: Passenger;

  constructor(private passengerService: PassengerService) {}
  ngOnInit() {}

  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.passengerEmit);
    }
    this.editing = !this.editing;
  }
  handleFullNameEdit(event: any) {
    this.passengerEmit = { ...this.passengers, fullName: event.target.value };
  }
  handleRemove(id: number) {
    this.remove.emit(id);
  }
}
