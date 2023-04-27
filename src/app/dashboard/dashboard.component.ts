import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { DashboardService } from './dashboard.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DiaglogExampleComponent } from '../diaglog-example/diaglog-example.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {


 minDate = new Date();
 disabled = false;

displayedColumns: string[] = ['trip', 'duration', 'frequency', 'charges' , 'overtime'];

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

  constructor(private dashboardService : DashboardService, private dialog : MatDialog ){}

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
    onEdit(rate:any){
    const diaglogRef = this.dialog.open(DiaglogExampleComponent ,{

       width:'400px',
        data:rate
    })
    console.log(rate)
     }


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



          this.dashboardService.bookDriver(TripType,TripFrequency,TripDuration,
          From,FromDate,FromTime,To,ToDate,ToTime,
          VehicleType,FuelType,TransmissionType).subscribe((response:any)=>{
          console.log(response);
    })
    // console.log(this.bookDriverForm.value);
    this.bookDriverForm.reset();


   }


}
