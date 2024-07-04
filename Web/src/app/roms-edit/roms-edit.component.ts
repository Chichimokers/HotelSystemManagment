import { Component } from '@angular/core';
import { AdminApi } from '../services/Adminapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roms-edit',
  templateUrl: './roms-edit.component.html',
  styleUrl: './roms-edit.component.css'
})
export class RomsEditComponent {
  rooms :any;
  constructor(private service :AdminApi,
    private router :Router
    ){

  }
  addrom(){

    this.router.navigate(['admin', 'default', 'addrom'])
  }
  ngOnInit():void{
    this.LoadRoms();

  }
  EditRoom(id:string){

    this.router.navigate(['admin', 'default', 'editrooms', id])
  }
  DeleteRom(id:string){
  this.service.DeleteRom(id).subscribe((reponse)=>{
    if(reponse){
     this.LoadRoms();
    }
  })
  }

  LoadRoms(){
  this.service.GetRooms().subscribe((response)=>{
    this.rooms= response;
  })
  }

}
