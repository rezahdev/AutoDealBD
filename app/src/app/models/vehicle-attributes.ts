import { Vehicle } from "./vehicle";

export class VehicleAttributes {
    static readonly Condition = {
        Used: 'used', 
        New: 'new'
    }

    static MatchCondition(vc1: string, vc2: string): boolean {
        vc1 = vc1.toLowerCase();

        if(vc1 === VehicleAttributes.Condition.New || vc1 === VehicleAttributes.Condition.Used) {
            return vc1 === vc2.toLowerCase();
        }
        return false;
    }

    static IsNewVehicle(vehicle: Vehicle): boolean {
        return vehicle.condition === VehicleAttributes.Condition.New;
    }

    static readonly Make = {
        Acura: 'Acura',
        Afeela: 'Afeela',
        AlfaRomeo: 'Alfa Romeo',
        Audi: 'Audi',
        BMW: 'BMW',
        Bentley: 'Bentley',
        Buick: 'Buick',
        Cadillac: 'Cadillac',
        Chevrolet: 'Chevrolet',
        Chrysler: 'Chrysler',
        Dodge: 'Dodge',
        Fiat: 'Fiat',
        Fisker: 'Fisker',
        Ford: 'Ford',
        GMC: 'GMC',
        Genesis: 'Genesis',
        Honda: 'Honda',
        Hyundai: 'Hyundai',
        Infiniti: 'Infinit',
        Jaguar: 'Jaguar',
        Jeep: 'Jeep',
        Kia: 'Kia',
        LandRover: 'Land Rover',
        Lexus: 'Lexus',
        Lincoln: 'Lincon',
        Lotus: 'Lotus',
        Lucid: 'Lucid',
        Maserati: 'Maserati',
        Mazda: 'Mazda',
        MercedesBenz: 'Marcedes Benz',
        Mercury: 'Mercury',
        Mini: 'Mini',
        Mitsubishi: 'Mitsubishi',
        Nissan: 'Nissan',
        Polestar: 'Polestar',
        Pontiac: 'Pontiac',
        Porsche: 'Porsche',
        Ram: 'Ram',
        Rivian: 'Rivian',
        RollsRoyce: 'Rolls Royce',
        Saab: 'Saab',
        Saturn: 'Saturn',
        Scion: 'Scion',
        Scout: 'Scout',
        Smart: 'Smart',
        Subaru: 'Subaru',
        Suzuki: 'Suzuki',
        Tesla: 'Tesla',
        Toyota: 'Toyota',
        VinFast: 'VinFast',
        Volkswagen: 'Volkswagen',
        Volvo: 'Volvo'
    }

    static readonly Transmission = {
        Manual: 'Manual',
        Automatic: 'Automatic'
    }

    static readonly Drivetrain = {
        AWD: 'AWD',
        FWD: 'FWD',
        RWD: 'RWD'
    }

    static readonly Engine = {
        Hybrid: 'Hybrid',
        Gasoline: 'Gasoline',
        Electric: 'Electric',
    }

    static readonly FuelType = {
        Diesel: 'Diesel',
        Patrol: 'Patrol', 
        Electric: 'Electric',
        Hybrid: 'Electric',
        Unknown: 'Unknown'
    }

    static readonly Options = {
        HeatedMirrors: "Heated mirros",
        ParkingAssistant: "Parking assistant",
        HeatedSeat: 'Heated seat',
        CruiseControl: 'Cruise control',
        KeylessEntry: 'Keyless entry', 
        RemoteStart: 'Remote start',
        LEDHeadLights: 'LED headlights',
        LanekeepAssistant: 'Lane keep assistant',
        HeatedSteeringWheel: 'Heated steering wheel'
    }

    static readonly BodyType = {
        Sedan: 'Sedan',
        SUV: 'SUV',
        Truck: 'Truck',
        Coupe: 'Coupe',
        Minivan: 'Minivan',
        Hatchback: 'Hatchback',
        Convertible: 'Convertible', 
        Wagon: 'Wagon'
    }
}