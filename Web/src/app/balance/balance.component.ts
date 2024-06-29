import { Component, OnInit } from '@angular/core';
import { AdminApi } from '../services/Adminapi.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrl: './balance.component.css'
})
export class BalanceComponent implements OnInit{
  users : any = [];
  reservations: any = [ ];
  habitaciones :any = [];
  recaudado :number = 0;
  constructor(public service :AdminApi){

  }

  data:{name:string,value:number}[] =    [
    { name: 'Reservas', value: this.reservations.length },
    { name: 'Usuarios', value: this.users.length },
    { name: 'Habitaciones', value: this.habitaciones.length},
    { name: 'Ingresos', value: this.recaudado}
  ]

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  gradient = true;
  showXAxis = true;
  showYAxis = true;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'Categoría';
  yAxisLabel = 'Valor';
  legendTitle = 'Leyenda';

  updateChartData() {
    this.data = [
      { name: 'Reservas', value: this.reservations.length },
      { name: 'Usuarios', value: this.users.length },
      { name: 'Habitaciones', value: this.habitaciones.length },
      { name: 'Ingresos', value: this.recaudado }
    ];
  }

  ngOnInit():void{

    this.service.GetRooms().subscribe((response)=>{
      this.habitaciones =response;
      this.updateChartData();
    })
    this.service.getUsers().subscribe((response)=>{
      this.users =response;
      this.updateChartData();
    })
    this.service.getreservas().subscribe((response)=>{
      this.reservations =response;
      this.reservations.forEach((reservation: { preciototal: number; }) => {
        this.recaudado += reservation.preciototal
      })
      this.updateChartData();
    })





  }

}
