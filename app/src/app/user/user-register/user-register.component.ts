import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})

export class UserRegisterComponent implements OnInit{
  form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.pattern("^[0-9]*$"), Validators.maxLength(10)])
    }, this.passwordValidator)
  }

  passwordValidator(fg: AbstractControl): ValidationErrors | null {
    const password: string = fg?.get('password')?.value;
    const cpassword: string = fg?.get('confirmPassword')?.value; 

    return cpassword === password? null : { mismatch: true };
  }

  get userName(): FormControl {
    return this.form.get('userName') as FormControl;
  }

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

  get confirmPassword(): FormControl {
    return this.form.get('confirmPassword') as FormControl;
  }

  get phone(): FormControl {
    return this.form.get('phone') as FormControl;
  }

  onSubmit() {
    console.log(this.form.valid);
  }

}
