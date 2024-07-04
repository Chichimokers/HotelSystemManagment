import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminApi } from '../services/Adminapi.service';

@Component({
  selector: 'app-rommsedittemplate',
  templateUrl: './rommsedittemplate.component.html',
  styleUrl: './rommsedittemplate.component.css'
})
export class RommsedittemplateComponent {
  rooms: any = {}
  id :any
  constructor(private service: AdminApi,private router :Router,private route : ActivatedRoute){
  this.id =   this.id = this.route.snapshot.paramMap.get('id');

  }
  editar(){

    for(const key in this.rooms){

    this.service.UpdateRoom(this.rooms.id,this.rooms[key],key).subscribe((response)=>{
      if(response){
      }

    })
   }

   this.router.navigate(['admin', 'default', 'rommsedit'])
  }
  ngOnInit():void{
    this.LoadRoms();

  }
  LoadRoms(){
    this.service.GetRoomsById(this.id).subscribe((response)=>{
      this.rooms=response;
      console.log(this.rooms)
    })
  }
}
