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
      map(data => {
        const vehicleArray: Array<IVehicle> = [];

        for(const id in data) {
          if(data.hasOwnProperty(id)) {
            vehicleArray.push(data[id as keyof object]);
          }
        }
        return vehicleArray;
      })
    )
  }
}
