import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})

export class VehicleDetailComponent implements OnInit {
  vehicleId!: number;
  
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.vehicleId = +this.route.snapshot.params['id'];

    this.route.params.subscribe(params => {
      this.vehicleId = +params['id'];
    })
  }

  onSelectNext(): void {
    this.router.navigate(['detail', ++this.vehicleId]);
  }
}
