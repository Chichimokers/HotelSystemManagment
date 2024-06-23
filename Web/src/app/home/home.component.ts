import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  rooms : any;

  constructor(private weatherService: ApiServiceService) { }

  ngOnInit() {
    this.weatherService.GetRooms().subscribe(data => {
      this.rooms = data;
    });

  }

}

