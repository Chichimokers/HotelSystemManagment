import { Component, Input, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-reservation-card',
  templateUrl: './reservation-card.component.html',
  styleUrl: './reservation-card.component.css'
})
export class ReservationCardComponent  implements OnInit{
  @Input() Price: string | undefined;
  @Input() entrada: string | undefined;
  @Input() salida: string | undefined;
  @Input() id: string | undefined;
  cantpersonas :string | undefined;

  constructor(public service :ApiServiceService) {

  }
  ngOnInit():void{
    this.LoadHabitacionInfo();
  }
  async LoadHabitacionInfo(){
   this.service.GetRoomsById(this.id).subscribe(
      (response)=>{
       this.cantpersonas = response.cantdepersonas;
    })
  }
}
