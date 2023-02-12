import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  constructor(private http:HttpClient) { }

  getAllVehicles() {
    return this.http.get('data/vehicles.json').pipe(
      map(data => {
        const vehicleArray: Array<object> = [];

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
