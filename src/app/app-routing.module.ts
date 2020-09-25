import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleNoticiaScreenComponent } from './pantallas/detalle-noticia-screen/detalle-noticia-screen.component';
import { InicioScreenComponent } from './pantallas/inicio-screen/inicio-screen.component';
import { NoticiasSemanaScrennComponent } from './pantallas/noticias-semana-screnn/noticias-semana-screnn.component';
import { VideosScreenComponent } from './pantallas/videos-screen/videos-screen.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/inicio', pathMatch: 'full',
  },
  {
    path: 'inicio', component: InicioScreenComponent,
  },
  {
    path: 'noticias-semana', component: NoticiasSemanaScrennComponent,
  },
  {
    path: 'detalle-noticia/:id', component: DetalleNoticiaScreenComponent,
  },
  {
    path: 'videos', component: VideosScreenComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
