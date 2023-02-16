import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {


  // public static Triptype= "";
  // public static Tripfrequency= "";
  // public static  Tripduration= "";
  // public static  From= "";
  // public static fromDate= "";
  // public static fromTime= "";
  // public static  To= "";
  // public static toDate= "";
  // public static toTime= "";
  // public static Vehicletype= "";
  // public static Fueltype= "";
  // public static Transmissontype= "";

  displayedColumns: string[] = ['trip', 'duration', 'frequency', 'charges' , 'overtime'];

//   trpDetails= [
//    {
//     "trpType":{
//         "local":"Local",
//         "outstation":"Outstation",
//     },
//      "trpFrequency":{
//       "daily":"Daily",
//       "monthly":"Monthly"
//      },
//      "trpDuration":{
//         "4hr":"4Hrs",
//         "10hr":"10Hrs",
//         "12hr":"18Hrs",
//         "18hr":"18Hrs"
//       },
//       "vehicleType":{

//         "hatchback":"HatchBack",
//         "sedan":"sedan",
//         "suv":"Suv",
//         "compactsuv":"Compact Suv"


//       },
//       "fuelType":{
//           "petrol":"Petrol",
//           "diesel":"Diesel",
//           "electric":"Electric"

//       },
//       "transType":{
//           "manual":"Manual",
//           "automatic":"Automatic"
//       }

//    },
// ]

  TripType =[
    {"id":1, "trpType":"Local"},
    {"id":2, "trpType":"Outstation"},

  ]
    TripFrequency =[
      {"id":1 , "trpFrequency":"Daily"},
      {"id":2 , "trpFrequency":"Monthly"}
    ]

    TripDuration = [

      {"id":1,"trpDuration":"4hr"},
      {"id":2,"trpDuration":"8hr"},
      {"id":3,"trpDuration":"10hr"},
      {"id":4,"trpDuration":"12hr"},
    ]
    VehicleType= [

      {"id":1,"vehicleType":"HatchBack"},
      {"id":2,"vehicleType":"Sedan"},
      {"id":3,"vehicleType":"Suv"},
      {"id":4,"vehicleType":"Compact SUV"},
    ]

    FuelType = [

      {"id":1, "fuelType":"Petrol"},
      {"id":2, "fuelType":"Diesel"},
      {"id":3, "fuelType":"Electric"},
    ]

     TransType=[
      {"id":1, "transType":"Manual"},
      {"id":2, "transType":"Automatic"}
     ]

 potentialRate=[

  { trip:"Local" ,duration:"4", frequency:"Daily", charges:"450.00", overtime:"150" },
  { trip:"Local" ,duration:"8", frequency:"Daily", charges:"750.00", overtime:"150" },
  { trip:"Local" ,duration:"10", frequency:"Monthly", charges:"980.00", overtime:"150" },
  { trip:"Local" ,duration:"4", frequency:"Daily", charges:"450.00", overtime:"150" },
  { trip:"Outstation" ,duration:"8", frequency:"Monthly", charges:"850.00", overtime:"150" },
  { trip:"Outstation" ,duration:"10", frequency:"Monthly", charges:"1000.00", overtime:"100" },
  { trip:"Local" ,duration:"4", frequency:"Daily", charges:"450.00", overtime:"150" },
  { trip:"Outstation" ,duration:"0", frequency:"Outstation-halt", charges:"1450.00", overtime:"150" },
  { trip:"Outstation" ,duration:"0", frequency:"Outstation Mumbai", charges:"1500.00", overtime:"150" },
 ]

 dataSource = new MatTableDataSource<any>(this.potentialRate);

  fromDestination= [

    {"name":" Baner"},
    {"name":"Kothrud"},
    {"name":"Hadapsar"},
    {"name":"Pashan"},
    {"name":"Deccan"},
    {"name":"Akurdi"},
    {"name":"Pimpri"},
    {"name":"Shivajinagar"},
    {"name":"Aundh"},
  ]

  toDestination=[

    {"name":"Satara"},
    {"name":"Kolhapur"},
    {"name":"Baner"},
    {"name":"Aundh"},
    {"name":"Shivajinagar"},
    {"name":"Akurdi"},
    {"name":"Sangli"},
    {"name":"Pune"},
    {"name":"Nagar"}

  ]

  constructor(private dashboardService : DashboardService ){}

  bookDriverForm = new FormGroup({

   Triptype :  new FormControl('',Validators.required),
   Tripfrequency :  new FormControl(''),
   Tripduration: new FormControl(''),
   From: new FormControl(''),
   fromDate:  new FormControl(''),
   fromTime: new FormControl(''),
   To: new FormControl(''),
   toDate: new FormControl(''),
   toTime: new FormControl(''),
   Vehicletype: new FormControl(''),
   Fueltype : new FormControl(''),
   Transmissontype: new FormControl(''),

})


  //  get Triptype (){
  //   return this.bookDriverForm.get('Triptype');
  // }

  // get frequency (){
  //   return this.bookDriverForm.get('Tripduration');
  // }

  // get from(){
  //   return this.bookDriverForm.get('From');
  // }

  // get to(){
  //   return this.bookDriverForm.get('toDate');
  // }

  // get time(){
  //    return this.bookDriverForm.get('toTime');
  // }

  // get vehicle(){
  //   return this.bookDriverForm.get('Vehicletype');
  // }

  // get fuel(){
  //   return this.bookDriverForm.get('Fueltype');
  // }

  // get transmission(){
  //   return this.bookDriverForm.get('Transmissiontype')
  // }




   bookDriver(){

         const TripType = this.bookDriverForm.get('Triptype')?.value;
         const TripFrequency = this.bookDriverForm.get('Tripfrequency')?.value;
          const TripDuration = this.bookDriverForm.get('Tripduration')?.value;
          const From = this.bookDriverForm.get('From')?.value;
          const FromDate = this.bookDriverForm.get('fromDate')?.value;
          const FromTime = this.bookDriverForm.get('fromTime')?.value;
          const To = this.bookDriverForm.get('To')?.value;
          const ToDate = this.bookDriverForm.get('toDate')?.value;
          const ToTime = this.bookDriverForm.get('toTime')?.value;
          const VehicleType = this.bookDriverForm.get('Vehicletype')?.value;
          const FuelType = this.bookDriverForm.get('Fueltype')?.value;
          const TransmissionType = this.bookDriverForm.get('Transmissiontype')?.value;



    this.dashboardService.bookDriver(TripType,TripFrequency,TripDuration,From,FromDate,FromTime,To,ToDate,ToTime,VehicleType,FuelType,TransmissionType).subscribe((response:any)=>{
      console.log(response);
    })
    // console.log(this.bookDriverForm.value);
    this.bookDriverForm.reset();


   }


}
