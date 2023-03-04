export interface Vehicle {
    id: number;
    title: string;
    vehicleType: string;
    condition: string;
    conditionDetails?: string;
    kilometres?: number;
    price: number;
    images: Array<string>;
}