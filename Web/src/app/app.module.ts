import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ApiServiceService } from './services/api-service.service';
import { NavbarComponent } from './navbar/navbar.component';
import { CardsComponent } from './cards/cards.component';
import { LoginComponent } from './login/login.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { ModalService } from './services/modal.service';
import { MatDialogModule } from '@angular/material/dialog';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { ReserveComponent } from './reserve/reserve.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CardsComponent,
    LoginComponent,
    HomeScreenComponent,
    RegisterComponentComponent,
    ReserveComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
  ],
  providers: [ModalService,ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
