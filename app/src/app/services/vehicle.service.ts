import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Vehicle } from '../models/vehicle';
import { VehicleAttributes } from '../models/vehicle-attributes';

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
            const vehicleData = res[id as keyof object];

            if (vehicleData['isAvailable'] && VehicleAttributes.MatchCondition(vehicleData['condition'], vehicleCondition)) {
              let vehicle: Vehicle = {
                id: +vehicleData['id'],
                sellerId: +vehicleData['sellerId'],
                price: +vehicleData['price'],
                condition: vehicleData['condition'],
                bodyType: vehicleData['bodyType'],
                make: vehicleData['make'],
                model: vehicleData['model'],
                year: +vehicleData['year'],
                mileage: +vehicleData['mileage'],
                transmission: vehicleData['transmission'],
                engine: vehicleData['engine'],
                power: +vehicleData['power'],
                drivetrain: vehicleData['drivetrain'],
                fuelType: vehicleData['fuelType'],
                seatingCapacity: +vehicleData['seatingCapacity'],
                doors: +vehicleData['doors'],
                exteriorColor: vehicleData['exeriorColor'],
                options: vehicleData['options'],
                images: vehicleData['images'],
                description: vehicleData['description'],
                isAvailable: vehicleData['isAvailable'],
                address: vehicleData['address']
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
