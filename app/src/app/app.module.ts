import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { VehicleCardComponent } from './vehicle/vehicle-card/vehicle-card.component';
import { VehicleListComponent } from './vehicle/vehicle-list/vehicle-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { VehicleService } from './services/vehicle.service';
import { VehicleDetailComponent } from './vehicle/vehicle-detail/vehicle-detail.component';
import { AddVehicleComponent } from './vehicle/add-vehicle/add-vehicle.component';

const routes: Routes = [
  { path: '', component: VehicleListComponent },
  { path: 'used', component: VehicleListComponent },
  { path: 'post', component: AddVehicleComponent },
  { path: 'detail/:id', component: VehicleDetailComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    VehicleCardComponent,
    VehicleListComponent,
    NavBarComponent,
    VehicleDetailComponent,
    AddVehicleComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule, 
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    VehicleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
