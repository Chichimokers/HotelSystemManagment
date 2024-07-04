import { HttpClient, HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminApi  implements OnInit{

  private apiUrl = 'http://localhost:8080'; // Reemplaza YOUR_API_KEY con tu clave de API real
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
  //rutas administrativas

  DeleteRom(id:string){
    return this.http.delete(this.apiUrl+"/db/habitaciones/"+id);



  }
  getUsers(): Observable<any> {

    return this.http.get(this.apiUrl+"/db/user");

  }
  UpdateUser(id:string,newvalue:string,field:string): Observable<any> {

    return this.http.patch(this.apiUrl+"/db/user/"+id,{
      updatefield:field,
      value:newvalue,
    });

  }
  AddRom(body:any): Observable<any> {

    return this.http.post(this.apiUrl+"/db/habitaciones/",body);

  }
  UpdateRoom(id:string,newvalue:string,field:string): Observable<any> {

    return this.http.patch(this.apiUrl+"/db/habitaciones/"+id,{
      updatefield:field,
      value:newvalue,
    });

  }
  UdpateRerservaion(id:string,newvalue:string,field:string): Observable<any> {

    return this.http.patch(this.apiUrl+"/db/reservas/"+id,{
      updatefield:field,
      value:newvalue,
    });

  }
  deleteUser(id:string){
    return this.http.delete(this.apiUrl+"/db/user/"+id);
  }

  async deleteReservation(id :string ,id_habitacion:string) {

    return new Promise((resolve,reject)=>{

     this.http.delete(this.apiUrl+"/db/reservas/"+id).subscribe((response)=>{

      if(response){

      this.http.patch(this.apiUrl+"/db/habitaciones/"+id_habitacion,{

        updatefield:"reservada",
        value:false,

      }).subscribe(
        (response)=>{
          resolve(resolve)
      },

      (err)=>{
        reject(err)
      }
      );
      }else{
        reject("error")
      }
     });



    })


  }

  getusersbyid(id : string ): Observable<any> {
    return this.http.get(this.apiUrl+"/db/user/"+id);
  }
  getreservasbyid(id:string){
    return this.http.get(this.apiUrl+"/db/reservas/"+id);
  }

  getreservas(){
    return this.http.get(this.apiUrl+"/db/reservas");
  }
  //rutas normales
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
