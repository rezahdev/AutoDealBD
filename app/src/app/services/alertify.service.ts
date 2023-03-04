import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  static success(message: string): void {
    alertify.success(message);
  }

  static error(message: string): void {
    alertify.error(message);
  }


}
