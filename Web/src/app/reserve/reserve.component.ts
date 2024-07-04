import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiServiceService } from '../services/api-service.service';


@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrl: './reserve.component.css'
})
export class ReserveComponent implements OnInit{
  correct : string |null= null;
  error :string|null = null

  id_habitacion : string |null|undefined = "";
  numero_huspedes : string|null|undefined = "";
  preciototal: string|null|undefined = "";
  cantdiasestadia : string|null|undefined  ="10";
  id_cliente : string|null |undefined = "";
  Usuario  = localStorage.getItem("id")
  id:string |null = null;

  ReserveForm = new FormGroup({
    fechae: new FormControl(null),
    fechas:new FormControl(null),
  });

 token:string |null = localStorage.getItem("token")

 myreserves :any;
 constructor(

  private router: Router,
  private route: ActivatedRoute,
  private service : ApiServiceService){
  this.id = this.route.snapshot.paramMap.get('id');


 }

 async ngOnInit(){
  if(this.id ==null){

    this.service.getMyReserves().subscribe(data => {
      this.myreserves = data;
    });

  }else{
    this.service.GetRoomsById(this.id).subscribe(detalles => {
      this.id_habitacion = this.id?.toString();
      this.numero_huspedes = detalles.cantdepersonas;
      this.preciototal = detalles.precio;
      this.id_cliente =this.Usuario;
      });
  }

}

onSubmit(){
  this.service.Reserve(
    String(this.ReserveForm.get("fechae")?.value),
    String(this.ReserveForm.get("fechas")?.value),
    String(this.numero_huspedes),
    this.id_cliente,
    String(this.preciototal),
    this.cantdiasestadia,
    this.id_habitacion
    ).subscribe((response)=>{
      if(response){
        this.router.navigate(['/home']);
      }

    },

    (error)=>{
      console.log(error)
      this.error= error;
    })



}



}
