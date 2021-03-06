import { Component, Input } from "@angular/core";
import { Passenger, passengers } from "src/assets/passengers";
@Component({
  selector: "passenger-count",
  template: `<div>
    Checked In passenger:{{ countPassenger() }}/{{ items ?.length }}
  </div>`,
})
export class PassengerCountComponent {
  @Input() items: Passenger[];


  countPassenger(): number {
    return this.items?.filter((passenger) => passenger.checkedIn)?.length;
  }
}
