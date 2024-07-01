import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { AdminApi } from '../services/Adminapi.service';

@Component({
  selector: 'app-edit-reservations',
  templateUrl: './edit-reservations.component.html',
  styleUrl: './edit-reservations.component.css'
})
export class EditReservationsComponent implements OnInit {

  reservations :any = [ ];


 constructor(private service :AdminApi){

 }
  loadusers(){

  }
  ngOnInit(): void {


      this.service.getreservas().subscribe((response)=>{
        this.reservations = response;
        console.log(this.reservations)

    })

  }



}
