import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent {

  isCollapsed = true;

  constructor(private authService: AuthService, private router: Router) { 
    router.events.subscribe(val => {
      if(this.isCollapsed && val instanceof NavigationEnd) {
        this.isCollapsed = true;
      }
    })
  }

  get isUserLoggedIn(): boolean {
    return this.authService.isUserLoggedIn();
  }

  get userName(): string | null {
    return localStorage.getItem('userName');
  }

  onLogout() {
    this.authService.logoutUser();
    this.isCollapsed = true;
  }
}
