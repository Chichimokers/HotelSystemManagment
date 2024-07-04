import { Component, OnInit } from '@angular/core';
import { AdminApi } from '../services/Adminapi.service';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-reservationtemplate',
  templateUrl: './edit-reservationtemplate.component.html',
  styleUrl: './edit-reservationtemplate.component.css'
})
export class EditReservationtemplateComponent implements OnInit {
  reservation: any = {};
  id: any;

  constructor(
    private service: AdminApi,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get('id');


  }

  ngOnInit(): void {
    this.LoadReservation();
  }

  editar() {
   for(const key in this.reservation){
    this.service.UdpateRerservaion(this.reservation.id,this.reservation[key],key).subscribe((response)=>{
      if(response){
      }
    })
   }
   this.router.navigate(['admin', 'default', 'reservationsedit'])

  }

  LoadReservation() {
    this.service.getreservasbyid(this.id).subscribe((response) => {
      this.reservation = response;
    });
  }
}
