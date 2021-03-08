import { Component, OnInit,Output, EventEmitter } from "@angular/core";

import { Passenger } from "src/assets/passengers";
import{PassengerService} from "./passenger.service";
import {NgForm} from "@angular/forms"
import { Input } from "@angular/core";

@Component({
  selector: "Add-passenger",
  templateUrl: `./Add-passenger.component.html`,
  styleUrls: ["./Add-passenger.component.css"],
  exportAs: 'testForm'
})
export class AddPassengerComponent{
  @Input() items: Passenger[];
  @Output() add : EventEmitter<Passenger> = new EventEmitter();
  
  passengerToAdd: Passenger;
  error=false;
  @Output() newPassenger: EventEmitter<Passenger> = new EventEmitter();
constructor(private PassengerService:PassengerService){}

addPassenger(form:any):void{
 const {fullName,date}=form

 if(!fullName) {
  this.error=true 
  return};
  this.error=false
   this.PassengerService.addPassenger({fullName:fullName,checkInDate:date?new Date(date).getTime(): 0} as Passenger).subscribe(p=>{
       this.newPassenger.emit(p)
   })
   //this.newPassenger.emit(newPassenger)
}
clear(form,inputTxt,inputDate){
 form.value.fullName=''
 form.value.date='';
 inputTxt.value='';
 inputDate.value="";
}


}
