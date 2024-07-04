import { Component } from '@angular/core';
import { AdminApi } from '../services/Adminapi.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addromtemplate',
  templateUrl: './addromtemplate.component.html',
  styleUrl: './addromtemplate.component.css'
})
export class AddromtemplateComponent {
  rooms: any = {};
  id: any;

  constructor(
    private service: AdminApi,
    private router: Router,

  ) {



  }

  Crear(){
/*
*/
const body={
  "cantdepersonas": this.rooms.cantdepersonas,
  "precio": this.rooms.precio,
  "reservada": false,
  "id_detalles": null,
  "image": "assets/images.jpg"
};

this.service.AddRom(body).subscribe(
  (response)=>{

    if(response){
      this.router.navigate(['admin', 'default', 'rommsedit'])
    }
  })

  }

  ngOnInit(): void {

  }


}
