import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario.component';
import { InicioScreenComponent } from './screens/inicio-screen/inicio-screen.component';
import { DetalleScreenComponent } from './screens/detalle-screen/detalle-screen.component';
import { SemanalScreenComponent } from './screens/semanal-screen/semanal-screen.component';
import { ReclamosScreenComponent } from './screens/reclamos-screen/reclamos-screen.component';
import { CovidScreenComponent } from './screens/covid-screen/covid-screen.component';
import { NacionalScreenComponent } from './screens/nacional-screen/nacional-screen.component';
import { InternacionalScreenComponent } from './screens/internacional-screen/internacional-screen.component';
import { SportScreenComponent } from './screens/sport-screen/sport-screen.component';
import { TecnologiaScreenComponent } from './screens/tecnologia-screen/tecnologia-screen.component';

const routes: Routes = [
  {
    path: '',
    component: UsuarioComponent,
    children: [
      {path: '', redirectTo: 'inicio_us', pathMatch: 'full'},
      {path: 'inicio_us', component: InicioScreenComponent },
      {path: 'detalle_us/:id', component: DetalleScreenComponent},
      {path: 'noticias-semana_us', component: SemanalScreenComponent},
      {path: 'reclamo_us', component: ReclamosScreenComponent},
      {path: 'covid_us', component: CovidScreenComponent},
      {path: 'nacionales_us', component:  NacionalScreenComponent},
      {path: 'internacionales_us', component: InternacionalScreenComponent},
      {path: 'deportes_us', component: SportScreenComponent},
      {path: 'tecnologia_us', component: TecnologiaScreenComponent},
      {path: 'videos_us', loadChildren: () => import('src/app/videos/videos.module').then(m => m.VideosModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
