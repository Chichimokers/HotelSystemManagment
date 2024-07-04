import { Component, OnInit } from '@angular/core';
import { AdminApi } from '../services/Adminapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrl: './useredit.component.css'
})
export class UsereditComponent  implements OnInit{
users :any;
constructor(private service :AdminApi,
  private router :Router
  ){

}

ngOnInit():void{
  this.Loadusers();

}
EditUser(id:string){

  this.router.navigate(['admin', 'default', 'editusers', id])
}
DeleteUser(id:string){
this.service.deleteUser(id).subscribe((reponse)=>{
  if(reponse){
   this.Loadusers();
  }
})
}

Loadusers(){
this.service.getUsers().subscribe((response)=>{
  this.users= response;
})
}


}
