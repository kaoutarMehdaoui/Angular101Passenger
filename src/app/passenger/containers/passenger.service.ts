import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { Passenger, passengers } from "src/assets/passengers";
const url='http://localhost:3000/passengers';
@Injectable({ providedIn: "root" })
export class PassengerService {
  constructor(private http: HttpClient) {}

  public getPassengers(): Promise<Passenger[]> {
    return this.http.get<Passenger[]>(url).toPromise();
  }

  public editPassenger(
    id: number,
    passenger: Passenger
  ): Observable<Passenger> {
    return this.http.put<Passenger>(`${url}/${id}`, passenger);
  }

  public removePassenger(id: number): Observable<any | void> {
    return this.http.delete(`${url}/${id}`);
  }
  customOptions() {
    const options = {
      headers: new Headers({
        "content-type": "application/json",
      }),
    };
    return options;
  }
  public addPassenger(passenger:Passenger): Observable<Passenger>
  {
    passenger={...passenger,checkedIn:!!(Math.floor(Math.random()*2))}
    return this.http.post<Passenger>(url,passenger);
  }

}
