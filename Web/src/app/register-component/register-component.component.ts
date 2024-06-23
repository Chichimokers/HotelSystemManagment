import { Component, Inject, Input, Optional, SkipSelf } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrl: './register-component.component.css'
})
export class RegisterComponentComponent {

  @Input() modal: boolean| undefined ;


  error: string | null = null;
  correct: string | null = null;

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    mail: new FormControl('', Validators.required)
  });
  constructor(
    public servicio : ApiServiceService ,
    @Optional() @SkipSelf()  public dialogRef: MatDialogRef<RegisterComponentComponent>,
    @Optional() @SkipSelf()  @Inject(MAT_DIALOG_DATA) public data: any,
  )
    {
  }
  close(): void {
    this.dialogRef.close();

  }
async sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
 async onSubmit() {
    this.error=null;

    const username = this.loginForm.get("username")?.value;
    const mail = this.loginForm.get("mail")?.value;
    const password = this.loginForm.get("password")?.value;

    this.servicio.Register(username, password,mail).subscribe(

      async (response) => {
        if (response && response.msg) {
         this.correct= "Succefully Register";
         await this.sleep(2000)
         if(this.dialogRef){
          this.dialogRef.close()
         }

        }
      },
      (error)=>{

          this.error = error;

      }
    );
  }
}
