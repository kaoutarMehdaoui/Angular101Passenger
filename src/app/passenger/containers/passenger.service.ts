import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { Passenger, passengers } from "src/assets/passengers";
@Injectable({ providedIn: "root" })
export class PassengerService {
  constructor(private htpp: HttpClient) {}
  public getPassengers(): Observable<Passenger[]> {
    return of(passengers);
  }
}
