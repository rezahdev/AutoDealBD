import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Vehicle } from 'src/app/models/vehicle';
import { VehicleGlobalProps } from '../vehicle-global-props'

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})

export class AddVehicleComponent implements OnInit {
  readonly vehicleCondition = {
    Used: VehicleGlobalProps.Condition.Used,
    New: VehicleGlobalProps.Condition.New
  }

  constructor() { }

  ngOnInit(): void { }

  onFormSubmit(form: NgForm): void {
    console.log(form);
  }
}
