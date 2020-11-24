import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { InicioScreenComponent } from './screens/inicio-screen/inicio-screen.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {path: '', component: InicioScreenComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
