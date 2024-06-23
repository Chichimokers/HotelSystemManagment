import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { ReserveComponent } from './reserve/reserve.component';

const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{path:'home',component:HomeScreenComponent  ,
children: [
  { path: '', redirectTo: 'default', pathMatch: 'full' },
  { path: 'default', component: HomeComponent },
  { path: 'login', component: LoginComponent},// Un componente ficticio para demostrar
  { path: 'register', component: RegisterComponentComponent},
  {path:'reserve/:id',component:ReserveComponent}
]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule  {


}
