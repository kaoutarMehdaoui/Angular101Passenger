import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { PassengerCountComponent } from "./components/passenger-count/passenger-count";
import { PassengerListComponent } from "./components/passenger-list/passenger-list.component";

import { PassengerDashbordComponent } from "./containers/passenger-dashbord.component";
import { PassengerService } from "./containers/passenger.service";

@NgModule({
  declarations: [
    PassengerDashbordComponent,
    PassengerCountComponent,
    PassengerListComponent,
  ],
  imports: [CommonModule, HttpClientModule],
  providers: [PassengerService],
  exports: [PassengerDashbordComponent],
})
export class PassengersModule {}
