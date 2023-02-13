import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { VehicleSettings } from '../Vehicle.settings'

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})

export class AddVehicleComponent implements OnInit {
  readonly CONDITION = {
    Used: VehicleSettings.CONDITION.Used,
    New: VehicleSettings.CONDITION.New
  } 

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  onFormSubmit(form: NgForm): void {
    console.log(form);
  }
}
