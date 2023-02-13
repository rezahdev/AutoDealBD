import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IVehicle } from '../vehicle/IVehicle.interface';
import { VehicleSettings } from '../vehicle/Vehicle.settings';

@Injectable({
  providedIn: 'root'
})

export class VehicleService {
  constructor(private http:HttpClient) { }

  /**
   * Get all vehicles and return the vehicles with the given vehicle condition. 
   * @param vehicleCondition the condition of the vehicles to be retrieved (used or new).
   * @returns Observable of the list of vehicles with the given condition.
   */
  getAllVehicles(vehicleCondition: string): Observable<IVehicle[]> {
    return this.http.get('data/vehicles.json').pipe(
      map(res => {
        const vehicleArray: Array<IVehicle> = [];
        
        for(const id in res) {
          if(res.hasOwnProperty(id)) {
            const data = res[id as keyof object];
            
            if(VehicleSettings.CONDITION.Match(data['condition'], vehicleCondition)) {
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
        }
        return vehicleArray;
      })
    )
  }
}
