import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { VehicleCardComponent } from './vehicle/vehicle-card/vehicle-card.component';
import { VehicleListComponent } from './vehicle/vehicle-list/vehicle-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { VehicleService } from './services/vehicle.service';
import { VehicleDetailComponent } from './vehicle/vehicle-detail/vehicle-detail.component';

const routes: Routes = [
  { path: '', component: VehicleListComponent },
  { path: 'used', component: VehicleListComponent },
  { path: 'post', component: VehicleListComponent },
  { path: 'detail/:id', component: VehicleDetailComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    VehicleCardComponent,
    VehicleListComponent,
    NavBarComponent,
    VehicleDetailComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule, 
    RouterModule.forRoot(routes)
  ],
  providers: [
    VehicleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
