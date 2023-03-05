import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent implements OnInit {

  loginForm!: FormGroup;
  isFormSubmitted: boolean = false;
  
  constructor(private formBuilder: FormBuilder, 
              private authService: AuthService,
              private router: Router) { }

  get email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  onSubmit(): void {
    this.isFormSubmitted = true;

    if(this.loginForm.valid) {
      const loginCredentials = { 
        email: this.email.value, 
        password: this.password.value 
      }

      const res = this.authService.authenticateUser(loginCredentials);

      if(res) {
        localStorage.setItem('authToken', res.token);
        localStorage.setItem('userName', res.userName);
        
        this.router.navigate(['/']);
        AlertifyService.success('Login successful');
      }
      else {
        AlertifyService.error('Invalid email or password');
      }
      
      this.isFormSubmitted = false;
    }
    else {
      AlertifyService.error('Invalid email or password');
    }
  }
}
