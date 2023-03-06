import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, ValidationErrors, Validators } from '@angular/forms';
import { Vehicle } from 'src/app/models/vehicle';
import { Address } from 'src/app/models/address';
import { VehicleAttributes } from '../../models/vehicle-attributes'
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { Province } from 'src/app/models/province';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})

export class AddVehicleComponent implements OnInit {

  @ViewChild('formTabs') formTabs!: TabsetComponent;

  screenWidth?: number;
  screenHeight?: number;
  vehiclePreview: Vehicle = {
    id: 0,
    sellerId: 0,
    price: 0,
    condition: '',
    bodyType: '',
    make: '',
    model: '',
    year: new Date().getFullYear(),
    mileage: 0,
    transmission: '',
    drivetrain: '',
    images: [],
    isAvailable: true,
    options: [],
    address: {
        street: "",
        city: "",
        province: "",
        country: "Canada"
    }
  };

  addVehicleForm!: FormGroup;
  isAddVehicleFormSubmitted: boolean = false;

  readonly conditionAttr: any = VehicleAttributes.Condition;
  readonly transmissionAttr: any = VehicleAttributes.Transmission;
  readonly drivetrainAttr: any = VehicleAttributes.Drivetrain;
  readonly makeAttr: any = VehicleAttributes.Make;
  readonly engineAttr: any = VehicleAttributes.Engine;
  readonly fuelTypeAttr: any = VehicleAttributes.FuelType;
  readonly optionsAttr: any = VehicleAttributes.Options;
  readonly provinceAttr: any = Province.Code;
  readonly bodyTypeAttr: any = VehicleAttributes.BodyType;

  constructor(private formBuilder: FormBuilder) {  }

  get description(): FormControl {
    return this.addVehicleForm.get('description') as FormControl;
  }

  get price(): FormControl {
    return this.addVehicleForm.get('price') as FormControl;
  }

  get condition(): FormControl {
    return this.addVehicleForm.get('condition') as FormControl;
  }

  get bodyType(): FormControl {
    return this.addVehicleForm.get('bodyType') as FormControl;
  }

  get make(): FormControl {
    return this.addVehicleForm.get('make') as FormControl;
  }

  get model(): FormControl {
    return this.addVehicleForm.get('model') as FormControl;
  }

  get year(): FormControl {
    return this.addVehicleForm.get('year') as FormControl;
  }

  get mileage(): FormControl {
    return this.addVehicleForm.get('mileage') as FormControl;
  }

  get transmission(): FormControl {
    return this.addVehicleForm.get('transmission') as FormControl;
  }

  get engine(): FormControl {
    return this.addVehicleForm.get('engine') as FormControl;
  }

  get power(): FormControl {
    return this.addVehicleForm.get('power') as FormControl;
  }

  get drivetrain(): FormControl {
    return this.addVehicleForm.get('drivetrain') as FormControl;
  }

  get fuelType(): FormControl {
    return this.addVehicleForm.get('fuelType') as FormControl;
  }

  get seatingCapacity(): FormControl {
    return this.addVehicleForm.get('seatingCapacity') as FormControl;
  }

  get doors(): FormControl {
    return this.addVehicleForm.get('doors') as FormControl;
  }

  get exteriorColor(): FormControl {
    return this.addVehicleForm.get('exteriorColor') as FormControl;
  }

  get options(): FormControl {
    return this.addVehicleForm.get('options') as FormControl;
  }

  get images(): FormControl {
    return this.addVehicleForm.get('images') as FormControl;
  }

  get isAvailable(): FormControl {
    return this.addVehicleForm.get('isAvailable') as FormControl;
  }

  get street(): FormControl {
    return this.addVehicleForm.get('street') as FormControl;
  }

  get city(): FormControl {
    return this.addVehicleForm.get('city') as FormControl;
  }

  get province(): FormControl {
    return this.addVehicleForm.get('province') as FormControl;
  }

  ngOnInit(): void { 
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.createAddVehicleForm();
  }

  createAddVehicleForm(): void {
    this.addVehicleForm = this.formBuilder.group({
      condition: new FormControl(null, [Validators.required]),
      make: new FormControl(null, [Validators.required]),
      model: new FormControl(null, [Validators.required, Validators.maxLength(100)]),
      bodyType: new FormControl(null, [Validators.required]),
      year: new FormControl(null, [Validators.required, this.yearValidator.bind(this)]),
      mileage: new FormControl(null),
      transmission: new FormControl(null, [Validators.required]),
      drivetrain: new FormControl(null, [Validators.required]),
      engine: new FormControl(null),
      power: new FormControl(null, [this.powerValidator.bind(this)]),
      fuelType: new FormControl(null, [Validators.maxLength(100)]),
      seatingCapacity: new FormControl(null, [this.seatingCapacityValidator.bind(this)]),
      doors: new FormControl(null, [this.doorsValidator.bind(this)]),
      exteriorColor: new FormControl(null, [Validators.maxLength(25)]),
      options: new FormControl(null),
      price: new FormControl(null, [Validators.required, this.priceValidator.bind(this)]),
      description: new FormControl(null, [Validators.maxLength(2000)]),
      street: new FormControl(null, [Validators.required, Validators.maxLength(100)]),
      city: new FormControl(null, [Validators.required, Validators.maxLength(20)]),
      province: new FormControl(null, [Validators.required]),
    }, this.mileageValidator.bind(this) )
  }

  private priceValidator(control: AbstractControl): ValidationErrors | null {
    return this.isValidNumber(control.value, 0, 1_000_000)? null : { 'value': true };
  }

  private mileageValidator(formGroup: AbstractControl): ValidationErrors | null {
    const condition = formGroup.get('condition')?.value;
    const mileage = formGroup.get('mileage')?.value;
    const isValidMileageNumber = this.isValidNumber(mileage, 1, 500_000);

    // If vehicle is used, a valid milage of type number is required.
    if(condition === this.conditionAttr.used && !isValidMileageNumber) {
      return { 'value': true };
    }
    return null;
  }

  private powerValidator(control: AbstractControl): ValidationErrors | null {
    return this.isValidNumber(control.value, 50, 2000)? null : { 'value': true };
  }

  private seatingCapacityValidator(control: AbstractControl): ValidationErrors | null {
    return this.isValidNumber(control.value, 1, 16)? null : { 'value': true };
  }

  private doorsValidator(control: AbstractControl): ValidationErrors | null {
    return this.isValidNumber(control.value, 0, 8)? null : { 'value': true };
  }

  private yearValidator(control: AbstractControl): ValidationErrors | null {
    return this.isValidNumber(control.value, 1950, new Date().getFullYear()+1)? null : { 'value': true };
  }

  private isValidNumber(num: any, min: number, max: number): boolean {
    return !isNaN(num) && +num >= min && +num <= max;
  }

  selectTab(tabId: number) {
    this.isAddVehicleFormSubmitted = true;

    if (this.formTabs?.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
      this.isAddVehicleFormSubmitted = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }
}
