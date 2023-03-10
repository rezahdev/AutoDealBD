import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { AppComponent } from './app.component';
import { VehicleCardComponent } from './vehicle/vehicle-card/vehicle-card.component';
import { VehicleListComponent } from './vehicle/vehicle-list/vehicle-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { VehicleService } from './services/vehicle.service';
import { VehicleDetailComponent } from './vehicle/vehicle-detail/vehicle-detail.component';
import { AddVehicleComponent } from './vehicle/add-vehicle/add-vehicle.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserService } from './services/user.service';
import { AlertifyService } from './services/alertify.service';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  { path: '', component: VehicleListComponent },
  { path: 'used', component: VehicleListComponent },
  { path: 'post', component: AddVehicleComponent },
  { path: 'detail/:id', component: VehicleDetailComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'register', component: UserRegisterComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    VehicleCardComponent,
    VehicleListComponent,
    NavBarComponent,
    VehicleDetailComponent,
    AddVehicleComponent,
    UserLoginComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    BsDropdownModule,
    CollapseModule,
    TabsModule,
    ButtonsModule
  ],
  providers: [
    VehicleService,
    UserService,
    AlertifyService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
