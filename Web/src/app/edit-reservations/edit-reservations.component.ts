import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { AdminApi } from '../services/Adminapi.service';
import { consumerPollProducersForChange } from '@angular/core/primitives/signals';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-reservations',
  templateUrl: './edit-reservations.component.html',
  styleUrl: './edit-reservations.component.css',
})
export class EditReservationsComponent implements OnInit {
  reservations: any = [];

  users: any = [];

  constructor(private service: AdminApi, private router: Router) {}

  getUsernameForReservation(userId: string) :string{
  var username ="";
  this.users.forEach((_user: any) =>{
   if(_user.id == userId){
    username =  _user.username;
   }
  })

  return  username;

  }

  deleteReservation(id:string,id_habitacion :string){

    this.service.deleteReservation(id,id_habitacion).then(
      (reponse)=>{
        if(reponse){
          this.loadReservations();
        }
    }

    );

  }

  editReservation(reservation: any) {

    this.router.navigate(['admin', 'default', 'editreserve', reservation.id])

  }

  getUsersForReservations() {

    var userIds: any[] = [];

    this.reservations.map(
      (reservation: { id_cliente: { toString: () => any } }) =>

        userIds.push(reservation.id_cliente.toString())
    );


    userIds.forEach((userId) => {

      this.service.getusersbyid(userId.toString()).subscribe((user) => {
        this.users.push(user);
      });

    });

    console.log(this.users);
  }
  loadReservations(){
    this.service.getreservas().subscribe((response) => {
      this.reservations = response;
      this.getUsersForReservations();
    });
  }

  ngOnInit(): void {
    this.loadReservations();
  }
}
