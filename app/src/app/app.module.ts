import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { VehicleCardComponent } from './vehicle/vehicle-card/vehicle-card.component';
import { VehicleListComponent } from './vehicle/vehicle-list/vehicle-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { VehicleService } from './services/vehicle.service';


@NgModule({
  declarations: [
    AppComponent,
    VehicleCardComponent,
    VehicleListComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [
    VehicleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
