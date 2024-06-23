import { Injectable } from '@angular/core';
import { MatDialog, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RegisterComponentComponent } from '../register-component/register-component.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(private dialog: MatDialog) {}

  openModal(): void {
    this.dialog.open(LoginComponent,{width:'400px', panelClass: 'custom-dialog-container',data:{ modal : true }});
  }

  openRegisterModal(): void {
    this.dialog.open(RegisterComponentComponent,{width:'400px',  panelClass: 'custom-dialog-container',});
  }
}
