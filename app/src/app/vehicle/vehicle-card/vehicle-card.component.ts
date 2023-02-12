import { Component, Input } from '@angular/core';
import { faEdit, faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { IVehicle } from '../IVehicle.interface';

@Component({
    selector: 'app-vehicle-card',
    templateUrl: 'vehicle-card.component.html',
    styleUrls:  ['vehicle-card.component.css']
})

export class VehicleCardComponent {
    @Input() vehicle!: IVehicle;
    faEdit = faEdit;
    faZoomIn = faSearchPlus;
 }