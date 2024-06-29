import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ApiServiceService } from './api-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: ApiServiceService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // Check if the user is authenticated
    if (this.authService.isLoggedIn()) {
      // If the user is authenticated, allow access to the route
      return true;
    } else {
      // If the user is not authenticated, redirect them to the login page
      this.router.navigate(['/home'], { queryParams: { returnUrl: state.url } });
      return false;
    }
  }
}
