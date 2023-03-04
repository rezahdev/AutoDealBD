import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Vehicle } from '../models/vehicle';
import { VehicleGlobalProps } from '../vehicle/vehicle-global-props';

@Injectable({
  providedIn: 'root'
})

export class VehicleService {
  constructor(private http: HttpClient) { }

  /**
   * Get all vehicles and return the vehicles with the given vehicle condition. 
   * @param vehicleCondition the condition of the vehicles to be retrieved (used or new).
   * @returns Observable of the list of vehicles with the given condition.
   */
  getAllVehicles(vehicleCondition: string): Observable<Vehicle[]> {
    return this.http.get('data/vehicles.json').pipe(
      map(res => {
        const vehicleArray: Array<Vehicle> = [];

        for (const id in res) {
          if (res.hasOwnProperty(id)) {
            const data = res[id as keyof object];

            if (VehicleGlobalProps.Condition.Match(data['condition'], vehicleCondition)) {
              let vehicle: Vehicle = {
                id: +data['id'],
                title: data['title'],
                vehicleType: data['vehicleType'],
                condition: data['condition'],
                price: +data['price'],
                images: data['images']
              }
              vehicleArray.push(vehicle);
            }
          }
        }
        return vehicleArray;
      })
    )
  }
}
