import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminApi } from '../services/Adminapi.service';

@Component({
  selector: 'app-users-edittemplate',
  templateUrl: './users-edittemplate.component.html',
  styleUrl: './users-edittemplate.component.css'
})
export class UsersEdittemplateComponent implements OnInit {
user: any = {}
id :any
constructor(private service: AdminApi,private router :Router,private route : ActivatedRoute){
this.id =   this.id = this.route.snapshot.paramMap.get('id');

}
editar(){

  for(const key in this.user){

  this.service.UpdateUser(this.user.id,this.user[key],key).subscribe((response)=>{
    if(response){
    }

  })
 }
 this.router.navigate(['admin', 'default', 'useredit'])
}
ngOnInit():void{
  this.LoadUser();
}
LoadUser(){
  this.service.getusersbyid(this.id).subscribe((response)=>{
    this.user=response;
  })
}
}
