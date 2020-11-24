import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeriodistaRoutingModule } from './periodista-routing.module';
import { PeriodistaComponent } from './periodista.component';
import { MisNoticiasScreenComponent } from './screens/mis-noticias-screen/mis-noticias-screen.component';
import { CrearNoticiaScreensComponent } from './screens/crear-noticia-screens/crear-noticia-screens.component';
import { ModificarNoticiaScreensComponent } from './screens/modificar-noticia-screens/modificar-noticia-screens.component';
import { InicioPeriodistaScreenComponent } from './screens/inicio-periodista-screen/inicio-periodista-screen.component';
import { CovidScreenComponent } from './screens/covid-screen/covid-screen.component';
import { TecnologiaScreenComponent } from './screens/tecnologia-screen/tecnologia-screen.component';
import { NacionalScreenComponent } from './screens/nacional-screen/nacional-screen.component';
import { DetalleScreenComponent } from './screens/detalle-screen/detalle-screen.component';
import { InternacionalScreenComponent } from './screens/internacional-screen/internacional-screen.component';
import { ReclamosScreenComponent } from './screens/reclamos-screen/reclamos-screen.component';
import { SemanalScreenComponent } from './screens/semanal-screen/semanal-screen.component';
import { SportScreenComponent } from './screens/sport-screen/sport-screen.component';


@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [
    PeriodistaComponent,
    MisNoticiasScreenComponent,
    CrearNoticiaScreensComponent,
    ModificarNoticiaScreensComponent,
    InicioPeriodistaScreenComponent,
    CovidScreenComponent,
    TecnologiaScreenComponent,
    NacionalScreenComponent,
    DetalleScreenComponent,
    InternacionalScreenComponent,
    ReclamosScreenComponent,
    SemanalScreenComponent,
    SportScreenComponent
  ],
  imports: [
    CommonModule,
    PeriodistaRoutingModule
  ]
})
export class PeriodistaModule { }
