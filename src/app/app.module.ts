import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';

import { PassengersModule } from './passenger/passenger.module';
import { PassengerFormComponent } from './passenger-form/passenger-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PassengerFormComponent
  ],
  imports: [
    BrowserModule,
    PassengersModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
