import { Address } from "./address";

export interface Vehicle {
    id: number;
    sellerId: number;
    condition: string;
    bodyType: string;
    make: string;
    model: string;
    year: number;
    drivetrain: string;
    mileage: number;
    transmission: string;
    price: number;
    engine?: string;
    power?: number;
    fuelType?: string;
    seatingCapacity?: number;
    doors?: number;
    exteriorColor?: string;
    options?: Array<string>;
    images: Array<string>;
    description?: string;
    isAvailable: boolean;
    address: Address;
}