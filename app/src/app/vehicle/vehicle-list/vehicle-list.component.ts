import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit{
  vehicles: Array<object> = [];

  constructor(private vehicleService:VehicleService) { }

  ngOnInit(): void {
    this.vehicleService.getAllVehicles().subscribe( data => { 
      this.vehicles = data;
    }, error => {
      console.log(error);
    })
  }
}
