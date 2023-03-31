import { IsLoggedInService } from './is-logged-in.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  userRole = 'admin';
  token = localStorage.getItem('token');

  constructor(
    private router: Router,
    private isLoggedInService: IsLoggedInService
  ) {}
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ):
  //   | Observable<boolean | UrlTree>
  //   | Promise<boolean | UrlTree>
  //   | boolean
  //   | UrlTree {
  //   if (this.userRole !== 'admin') {
  //     console.log('token', this.token);
  //     this.router.navigate(['user-denied']);
  //   }
  //   return true;
  // }

  canActivate() {
    if (this.isLoggedInService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['user-denied']);
    return false;
  }
}
