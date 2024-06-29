import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { AuthInterceptor } from './services/auth.httpinterceptor';
import { ReservationCardComponent } from './reservation-card/reservation-card.component';
import { AdminScreenComponent } from './admin-screen/admin-screen.component';
import { AdminComponent } from './admin/admin.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EditReservationsComponent } from './edit-reservations/edit-reservations.component';
import { BalanceComponent } from './balance/balance.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CardsComponent,
    LoginComponent,
    HomeScreenComponent,
    RegisterComponentComponent,
    ReserveComponent,
    ReservationCardComponent,
    AdminScreenComponent,
    AdminComponent,
    SidebarComponent,
    EditReservationsComponent,
    BalanceComponent
  ],

  imports: [
    NgxChartsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
  ],
  providers: [
    ModalService,
    JwtHelperService,
    ApiServiceService,
     {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },

      {
        provide: JWT_OPTIONS,
         useValue: JWT_OPTIONS

        }



  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
