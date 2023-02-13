export interface IVehicle {
    Id: number;
    Title: string;
    VehicleType: string;
    Condition: string; 
    ConditionDetails?: string;
    Kilometres?: number;
    Price: number;
    Images: Array<string>;
}