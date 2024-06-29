import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  ApiServiceService } from './api-service.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: ApiServiceService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Obtén el token JWT del servicio de autenticación
    const token = this.authService.getoken();

    // Clona la solicitud y agrega el token al encabezado Authorization
    const authRequest = request.clone({
      headers: request.headers.set('Authorizathion',`${token}`)
    });

    // Envía la solicitud con el token
    return next.handle(authRequest);
  }
}
