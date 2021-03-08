import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { PassengerCountComponent } from "./components/passenger-count/passenger-count";
import { PassengerListComponent } from "./components/passenger-list/passenger-list.component";
import { AddPassengerComponent } from "./containers/add-passenger/Add-passenger.component";
import { PassengerDashbordComponent } from "./containers/passenger-dashbord.component";
import { PassengerService } from "./containers/passenger.service";
import { PassengerFormComponent } from "./components/form/passenger-form/passenger-form.component";
import { PassengerFormViewerComponent } from "./containers/view-form/passenger-view-form";


@NgModule({
  declarations: [
    PassengerDashbordComponent,
    PassengerCountComponent,
    PassengerListComponent,
    AddPassengerComponent,
    PassengerFormComponent,
    PassengerFormViewerComponent
  ],
  imports: [CommonModule, HttpClientModule,FormsModule],
  providers: [PassengerService],
  exports: [PassengerDashbordComponent,PassengerFormViewerComponent],
})
export class PassengersModule {}
