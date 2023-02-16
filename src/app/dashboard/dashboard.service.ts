import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  public bookDriver(TripType:any,TripFrequency:any,TripDuration:any, From:any, FromDate:any,FromTime:any, To:any, ToDate:any, ToTime:any, VehicleType:any, FuelType:any, TransmissionType:any ):Observable<any>{

  // console.log(TripType);
    const url='https://reqres.in/api/users';
    return this.http.post<any>(url,{params:{
         tripType:TripType,
          tripFrequency:TripFrequency,
          tripDuration:TripDuration,
          from:From,
          fromDate:FromDate,
          fromTime:FromTime,
          to:To,
          toDate:ToDate,
          toTime:ToTime,
          vehicleType:VehicleType,
          fuelType:FuelType,
          transmissionType:TransmissionType




    }});


  }
}
