import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})

export class UserRegisterComponent implements OnInit{
  registrationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createRegistrationForm();
  }

  createRegistrationForm()
  {
    this.registrationForm = this.formBuilder.group({
      userName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.pattern("^[0-9]*$"), Validators.maxLength(10)])
    }, { validators: this.passwordMatchValidator })
  }

  passwordMatchValidator(formGroup: AbstractControl): ValidationErrors | null {
    const password: string = formGroup?.get('password')?.value;
    const cpassword: string = formGroup?.get('confirmPassword')?.value; 

    return cpassword === password? null : { passwordMismatch: true };
  }

  get userName(): FormControl {
    return this.registrationForm.get('userName') as FormControl;
  }

  get email(): FormControl {
    return this.registrationForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.registrationForm.get('password') as FormControl;
  }

  get confirmPassword(): FormControl {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }

  get phone(): FormControl {
    return this.registrationForm.get('phone') as FormControl;
  }

  onSubmit() {
    console.log(this.registrationForm.valid);
  }

}
