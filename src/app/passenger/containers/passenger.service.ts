import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { Passenger, passengers } from "src/assets/passengers";
const url='http://localhost:3000/passengers';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: "root" })
export class PassengerService {
  constructor(private http: HttpClient) {}
  public getPassengers(): Observable<Passenger[]> {
    return this.http.get<Passenger[]>(url);
  }
  public editPassenger(passenger:Passenger):Observable<any>{
    
    return this.http.put(`${url}/${passenger.id}`,httpOptions)
}

}
