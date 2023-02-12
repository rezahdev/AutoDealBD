import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/services/vehicle.service';
import { IVehicle } from '../IVehicle.interface';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit{
  vehicles!: Array<IVehicle>;

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.vehicleService.getAllVehicles().subscribe( data => { 
      this.vehicles = data;
    }, error => {
      console.log(error);
    })
  }
}
