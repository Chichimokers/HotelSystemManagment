
import { ApiServiceService } from '../services/api-service.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { Component, Inject, Input, OnInit, Optional, SkipSelf } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ModalService } from '../services/modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit{


  error: string | null = null;
  correct: string | null = null;

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private router: Router,
    public servicio : ApiServiceService ,
    @Optional() @SkipSelf()  public dialogRef: MatDialogRef<LoginComponent>,
    @Optional() @SkipSelf()  @Inject(MAT_DIALOG_DATA) public data: any,
    private modalService: ModalService)
    {
  }
  ngOnInit():void{


  }

  close(): void {
    this.dialogRef.close();

  }

  OpenRegister(){
    this.dialogRef.close();
    this.modalService.openRegisterModal();
  }

  async sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async onSubmit() {
    this.error=null;
    const username = this.loginForm.get("username")?.value;
    const password = this.loginForm.get("password")?.value;
    this.servicio.Login(username, password).subscribe(

      async (response) => {
        if (response && response.token) {

          this.correct= "Succefully Login";
          await this.sleep(2000)
          localStorage.setItem('token', response.token);

          const llaves = Object.keys(response.usuario[0])
          const valores = Object.values(response.usuario[0])

         for (let index = 0; index < llaves.length; index++) {

          localStorage.setItem(llaves[index],String( valores[index]))

         }
         console.log(this.router.url)
         if(this.router.url == "/admin/login"){
          this.router.navigate(['admin/']);
         }else{
          this.router.navigate(['/home/default']);
         }


          if(this.dialogRef){
            this.close();

          }

        }
      },
      (error)=>{

          this.error = error;
          console.log(this.error)

      }
    );
  }

}
