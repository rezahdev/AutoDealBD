import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from 'src/app/services/vehicle.service';
import { Vehicle } from '../../models/vehicle';
import { VehicleAttributes } from '../../models/vehicle-attributes';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})

export class VehicleListComponent implements OnInit {
  vehicles!: Array<Vehicle>;

  constructor(private vehicleService: VehicleService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const vehicleCondition: string = this.route.snapshot.url.toString() === VehicleAttributes.Condition.Used ?
      VehicleAttributes.Condition.Used : VehicleAttributes.Condition.New;

    this.vehicleService.getAllVehicles(vehicleCondition).subscribe(data => {
      this.vehicles = data;
    }, error => {
      console.log(error);
    });
  }
}
