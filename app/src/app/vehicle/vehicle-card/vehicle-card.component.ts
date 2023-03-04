import { Component, Input } from '@angular/core';
import { faEdit, faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { Vehicle } from '../../models/vehicle';

@Component({
    selector: 'app-vehicle-card',
    templateUrl: 'vehicle-card.component.html',
    styleUrls: ['vehicle-card.component.css']
})

export class VehicleCardComponent {
    @Input() vehicle!: Vehicle;
    faEdit = faEdit;
    faZoomIn = faSearchPlus;
}