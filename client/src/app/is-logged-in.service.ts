import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IsLoggedInService {
  constructor() {}

  isLoggedIn() {
    console.log('token isloggedinservice', localStorage.getItem('token'));

    return !!localStorage.getItem('token');
  }
}
