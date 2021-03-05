export  interface Passenger{
  id:number;
  fullName:string;
  checkedIn:boolean;
  checkInDate:number;
  children ?:child[];


}
interface child{
  name: string;
  age:number
}

export const passengers: Passenger[] = [
  {
    id: 1,
    fullName: "Stephen",
    checkedIn: true,
    checkInDate: 1490742000000,
    children:[{
      name:"hamza",
      age:12
    },{
      name:"salim",
      age:13
    }]
  },
  {
    id: 2,
    fullName: "Rose",
    checkedIn: false,
    checkInDate: null,
    children:[{
      name:"hamza",
      age:12
    }]
    
  },
  {
    id: 3,
    fullName: "James",
    checkedIn: true,
    checkInDate: 1491606000000,
  },
  {
    id: 4,
    fullName: "Louise",
    checkedIn: true,
    checkInDate: 1488412800000,
  },
  {
    id: 5,
    fullName: "Tina",
    checkedIn: false,
    checkInDate: null,
  },
];