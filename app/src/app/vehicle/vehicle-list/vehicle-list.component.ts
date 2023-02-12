import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit{
  vehicles: any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('data/vehicles.json').subscribe( data => { 
      this.vehicles = data;
    })
  }
}
