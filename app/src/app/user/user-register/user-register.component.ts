import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AlertifyService } from 'src/app/services/alertify.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})

export class UserRegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  user!: User;
  isFormSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

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

  ngOnInit(): void {
    this.createRegistrationForm();
  }

  createRegistrationForm(): void
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

  onSubmit(): void {
    this.isFormSubmitted = true;
    
    if(this.registrationForm.valid) {
      this.userService.addUser(this.userData());
      this.registrationForm.reset();
      this.isFormSubmitted = false;

      AlertifyService.success('Congratulation! You have successfully created an account!');
    }
    else {
      AlertifyService.error('Please correct all the errors.');
    }
  }

  userData(): User {
    return this.user = {
      name: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      phone: this.phone.value
    }
  }

}
