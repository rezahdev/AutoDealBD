import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IVehicle } from '../vehicle/IVehicle.interface';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  constructor(private http:HttpClient) { }

  getAllVehicles(vehicleCondition: string): Observable<IVehicle[]> {
    return this.http.get('data/vehicles.json').pipe(
      map(res => {
        const vehicleArray: Array<IVehicle> = [];
        console.log(vehicleCondition);
        for(const id in res) {
          if(res.hasOwnProperty(id) && vehicleCondition.match(res[id as keyof object]['condition'])) {
            const data = res[id as keyof object];
            let vehicle: IVehicle = {
              Id: +data['id'],
              Title: data['title'],
              VehicleType: data['vehicleType'],
              Condition: data['condition'],
              Price: +data['price'],
              Images: data['images']
            }
            vehicleArray.push(vehicle);
          }
        }
        return vehicleArray;
      })
    )
  }
}
