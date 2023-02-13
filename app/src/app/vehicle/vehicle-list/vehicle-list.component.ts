import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from 'src/app/services/vehicle.service';
import { IVehicle } from '../IVehicle.interface';
import { VehicleSettings } from '../Vehicle.settings';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit{
  vehicles!: Array<IVehicle>;

  constructor(private vehicleService: VehicleService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const vehicleCondition: string = this.route.snapshot.url.toString() == VehicleSettings.CONDITION.Used?
      VehicleSettings.CONDITION.Used : VehicleSettings.CONDITION.New;
     
    this.vehicleService.getAllVehicles(vehicleCondition).subscribe(data => { 
      this.vehicles = data;
    }, error => {
      console.log(error);
    })
  }
}
