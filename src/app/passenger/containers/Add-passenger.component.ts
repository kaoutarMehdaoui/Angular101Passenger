import { Component, OnInit,Output, EventEmitter } from "@angular/core";

import { Passenger } from "src/assets/passengers";
import{PassengerService} from "../containers/passenger.service"
import {NgForm} from "@angular/forms"
import { from } from "rxjs";
@Component({
  selector: "Add-passenger",
  templateUrl: `./Add-passenger.component.html`,
  styleUrls: ["./Add-passenger.component.css"],
})
export class AddPassengerComponent{
    error=false;
    @Output() newPassenger: EventEmitter<Passenger> = new EventEmitter();
 constructor(private PassengerService:PassengerService){}
 
 addPassenger(form:any):void{
   const {fullName,date}=form
   //console.log(form.date.getTime);
  // return
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
