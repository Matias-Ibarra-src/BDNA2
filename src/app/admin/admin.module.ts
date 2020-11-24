import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { InicioScreenComponent } from './screens/inicio-screen/inicio-screen.component';


@NgModule({
  declarations: [AdminComponent, InicioScreenComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
