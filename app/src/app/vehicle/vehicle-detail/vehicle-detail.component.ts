import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})

export class VehicleDetailComponent implements OnInit {
  vehicleId!: Number;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.vehicleId = this.route.snapshot.params['id'];
  }
}
