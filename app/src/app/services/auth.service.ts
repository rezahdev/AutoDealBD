import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  
  constructor() { }

  authenticateUser(loginCredentials: any): any {
    let users: Array<User> = [];

    if(localStorage.getItem('Users')) {
      users = JSON.parse(localStorage.getItem('Users')!);
    }
    const user = users.find(user => user.email === loginCredentials.email 
                           && user.password === loginCredentials.password);
    
    if(user) {
      return {'token': user.email, 'userName': user.name }
    }
    return null;
  }

  isUserLoggedIn(): boolean {
    return localStorage.getItem('authToken') != null; //Checks for both null and undefined.
  }

  logoutUser() {
    localStorage.removeItem('authToken');
  }
}
