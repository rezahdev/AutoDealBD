export class VehicleSettings {
    public static readonly CONDITION = {
        Used: "used", 
        New: "new",
        IsUsed: (vehicleCondition: string): boolean => {
            return (vehicleCondition.toLowerCase() === "used");
        },
        IsNew: (vehicleCondition: string): boolean => {
            return (vehicleCondition.toLowerCase() === "new");
        },
        Match: (vc1: string, vc2: string): boolean => {
            vc1 = vc1.toLocaleLowerCase();
            vc2 = vc2.toLocaleLowerCase();
            if (vc1 === "used" || "new") return vc1 === vc2;
            return false;
        }
    }
}