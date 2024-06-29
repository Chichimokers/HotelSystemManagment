import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import {ApiServiceService } from './api-service.service'

@Injectable({
  providedIn: 'root'
})

export class AdminGuard implements CanActivate {

  constructor(private authService: ApiServiceService, private router: Router, private jwtHelper: JwtHelperService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // Verificar si el usuario está autenticado
    if (this.authService.isLoggedIn()) {

      let token: any;

      token =  this.authService.getoken();

      // Verificar si el token es válido
      if (!this.jwtHelper.isTokenExpired(token)) {

        const payload = this.jwtHelper.decodeToken(token);

        if (payload.uid.isgerente) {

          return true;
        } else {

          this.router.navigate(['home/default']);
          return false;
        }

      } else {

        localStorage.clear();
        this.router.navigate(['admin/login']);
        return false;
      }
    } else {

      this.router.navigate(['admin/login']);
      return false;
    }
  }
}
