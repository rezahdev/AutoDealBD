import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  isCollapsed = false;

  constructor(private authService: AuthService) { }

  get isUserLoggedIn(): boolean {
    return this.authService.isUserLoggedIn();
  }

  get userName(): string | null {
    return localStorage.getItem('userName');
  }

  onLogout() {
    this.authService.logoutUser();
  }
}
