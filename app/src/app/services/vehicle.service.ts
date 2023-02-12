import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { IVehicle } from '../vehicle/IVehicle.interface';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  constructor(private http:HttpClient) { }

  getAllVehicles(): Observable<IVehicle[]> {
    return this.http.get('data/vehicles.json').pipe(
      map(res => {
        const vehicleArray: Array<IVehicle> = [];

        for(const id in res) {
          if(res.hasOwnProperty(id)) {
            const data = res[id as keyof object];
            let vehicle: IVehicle = {
              Id: parseInt(data['id']),
              Title: data['title'],
              Type: data['type'],
              Price: parseFloat(data['price'])
            }
            vehicleArray.push(vehicle);
          }
        }
        return vehicleArray;
      })
    )
  }
}
