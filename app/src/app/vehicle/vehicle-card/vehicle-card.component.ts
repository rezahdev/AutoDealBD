import { Component, Input } from '@angular/core';
import { faEdit, faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { Vehicle } from '../../models/vehicle';
import { VehicleAttributes } from '../../models/vehicle-attributes';

@Component({
    selector: 'app-vehicle-card',
    templateUrl: 'vehicle-card.component.html',
    styleUrls: ['vehicle-card.component.css']
})

export class VehicleCardComponent {
    @Input() vehicle!: Vehicle;
    @Input() hideIcons?: boolean = false;

    faEdit = faEdit;
    faZoomIn = faSearchPlus;
    
    get isValidPrice(): boolean {
        return this.isValidNumber(this.vehicle.price, 1, 1_000_000);
    }

    get isValidYear(): boolean {
        return this.isValidNumber(this.vehicle.year, 1950, new Date().getFullYear()+1);
    }

    get isValidMileage(): boolean {
        return this.isValidNumber(this.vehicle.mileage, 1, 500_000);
    }

    get isValidMake(): boolean {
        return this.isValidStr(this.vehicle.make);
    }

    get isValidModel(): boolean {
        return this.isValidStr(this.vehicle.model);
    }

    get isValidCondition(): boolean {
        return this.isValidStr(this.vehicle.condition);
    }

    get isValidBodyType(): boolean {
        return this.isValidStr(this.vehicle.bodyType);
    }

    get isValidTransmission(): boolean {
        return this.isValidStr(this.vehicle.transmission);
    }

    get isValidEngine(): boolean {
        if(this.vehicle.engine) {
            return this.isValidStr(this.vehicle.engine);
        }
        return false;
    }

    get isValidDrivetrain(): boolean {
        return this.isValidStr(this.vehicle.drivetrain);
    }

    get isValidAddress(): boolean {
        return this.isValidStr(this.vehicle.address.city) && this.isValidStr(this.vehicle.address.province);
    }

    get isNewVehicle(): boolean {
        return VehicleAttributes.IsNewVehicle(this.vehicle);
    }

    private isValidNumber(num: any, min: number, max: number): boolean {
        return !isNaN(num) && +num >= min && +num <= max;
    }

    private isValidStr(str: string): boolean {
        if(str) {
            return str.length > 0;
        }
        return false;
    }
}