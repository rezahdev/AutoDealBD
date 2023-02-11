import { Component } from '@angular/core';

@Component({
    selector: 'app-vehicle-card',
    templateUrl: 'vehicle-card.component.html',
    styleUrls:  ['vehicle-card.component.css']
})

export class VehicleCardComponent {
    Vehicle: any = {
        "id": 1,
        "type": "Car",
        "price": 12000
    }
 }