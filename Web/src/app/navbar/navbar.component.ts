import { Component } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public servicio :ApiServiceService){

  }
token : String |null = localStorage.getItem("token");

}
