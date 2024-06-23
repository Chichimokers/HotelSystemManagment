import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { ModalService } from '../services/modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  @Input() body: string| undefined ;
  @Input() image: string | undefined;
  @Input() romsize: string | undefined;
  @Input() Price: string | undefined;
  @Input() reservada: boolean | undefined;
  @Input() id: BigInteger | undefined;

  constructor(private modalService: ModalService,private router: Router) {}


  openModal(): void {

      if(localStorage.getItem("token") != null){

        this.router.navigate(['/home/reserve',this.id]);
      }else{
        this.modalService.openModal();
      }
  }


}
