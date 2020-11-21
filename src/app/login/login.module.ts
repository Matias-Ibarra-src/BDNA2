import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { AdminScreenComponent } from './screens/admin-screen/admin-screen.component';
import { CreateAndLoadScreenComponent } from './screens/create-and-load-screen/create-and-load-screen.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';


@NgModule({
  declarations: [LoginComponent, LoginScreenComponent, AdminScreenComponent, CreateAndLoadScreenComponent, NavegacionComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
