import { HttpClient, HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService  implements OnInit{

  private apiUrl = 'https://deployhotel.onrender.com'; // Reemplaza YOUR_API_KEY con tu clave de API real
  private headers = new HttpHeaders()
  .set('Authorizathion', String(localStorage.getItem("token"))) // Header por defecto para JSON;

  constructor(private http: HttpClient) { }
  isLoggedIn() : boolean{
    if(localStorage.getItem("token")){
      return true;
    }
    return false;
  }
  getoken(){

    return localStorage.getItem("token")

  }

  ngOnInit():void {

  }
  getMyReserves(): Observable<any> {

    return this.http.get(this.apiUrl+"/user/getreservas");

  }
  GetRooms(): Observable<any> {
    return this.http.get(this.apiUrl+"/user/gethabitaciones");
  }
  GetRoomsById(id:string| null| undefined ): Observable<any> {
    return this.http.get(this.apiUrl+"/user/gethabitaciones/"+id);
  }
  Reserve(
  fecha_entrada :string| null| undefined  ,
  fecha_salida:string| null| undefined ,
  numero_huspedes:string| null| undefined ,
  id_cliente:string| null| undefined ,
  preciototal:string| null| undefined ,
  cantdiasestadia:string| null| undefined ,
  id_habitacion:string| null| undefined

  ): Observable<any>{

    return this.http.post(this.apiUrl+"/user/reservar",
    {  fecha_entrada : fecha_entrada,
      fecha_salida:fecha_salida,
      numero_huspedes:numero_huspedes ,
      id_cliente:id_cliente,
      preciototal:preciototal ,
      cantdiasestadia:cantdiasestadia,
      id_habitacion:id_habitacion},


      ).pipe(
      catchError((error: HttpErrorResponse) => {

        if (error.status === 400) {
          return throwError(error.error.msg);
        } else {
          return throwError(error.error.msg);
        }
      })
    );
  }
  Login(Username : string | null| undefined ,password :string  | null| undefined): Observable<any>{
    return this.http.post(this.apiUrl+"/auth/auth",{nombre:Username , password: password}).pipe(
      catchError((error: HttpErrorResponse) => {

        if (error.status === 400) {
          return throwError(error.error.msg);
        } else {
          return throwError(error.error.msg);
        }
      })
    );
  }

  Register(Username : string | null| undefined ,password :string  | null| undefined,mail :string  | null| undefined): Observable<any>{
    return this.http.post(this.apiUrl+"/auth/singup",{nombre:Username , password: password,correo:mail}).pipe(

      catchError((error: HttpErrorResponse) => {

        if (error.status === 400) {
          return throwError(error.error.msg);
        } else {
          return throwError(error.error.msg);
        }
      })
    );;
  }

}
