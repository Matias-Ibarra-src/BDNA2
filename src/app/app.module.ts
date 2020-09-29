import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarjetaNoticiaComponent } from './componentes/tarjeta-noticia/tarjeta-noticia.component';
import { InicioScreenComponent } from './pantallas/inicio-screen/inicio-screen.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { DetalleNoticiaScreenComponent } from './pantallas/detalle-noticia-screen/detalle-noticia-screen.component';
import { TarjetaDetalleComponent } from './componentes/tarjeta-detalle/tarjeta-detalle.component';
import { TarjetaSemanalComponent } from './componentes/tarjeta-semanal/tarjeta-semanal.component';
import { NoticiasSemanaScrennComponent } from './pantallas/noticias-semana-screnn/noticias-semana-screnn.component';
import { VideosScreenComponent } from './pantallas/videos-screen/videos-screen.component';
import { TarjetaVideoComponent } from './componentes/tarjeta-video/tarjeta-video.component';
import { TarjetaPequeComponent } from './componentes/tarjeta-peque/tarjeta-peque.component';
import { EdicionScreenComponent } from './pantallas/edicion-screen/edicion-screen.component';
import { NoticiaNuevaScreenComponent } from './pantallas/noticia-nueva-screen/noticia-nueva-screen.component';
import { NacionalesScreenComponent } from './pantallas/nacionales-screen/nacionales-screen.component';
import { DeportesScreenComponent } from './pantallas/deportes-screen/deportes-screen.component';
import { CovidScreenComponent } from './pantallas/covid-screen/covid-screen.component';
import { InternacionalesScreenComponent } from './pantallas/internacionales-screen/internacionales-screen.component';
import { TecnologiaScreenComponent } from './pantallas/tecnologia-screen/tecnologia-screen.component';
import { RegistroScreenComponent } from './pantallas/registro-screen/registro-screen.component';
import { ClockComponent } from './componentes/clock/clock.component';
import { CalificacionComponent } from './componentes/calificacion/calificacion.component';
import { WeatherComponent } from './componentes/weather/weather.component';
import { ConversorComponent } from './componentes/conversor/conversor.component';



@NgModule({
  declarations: [
    AppComponent,
    TarjetaNoticiaComponent,
    InicioScreenComponent,
    NavegacionComponent,
    DetalleNoticiaScreenComponent,
    TarjetaDetalleComponent,
    TarjetaSemanalComponent,
    NoticiasSemanaScrennComponent,
    VideosScreenComponent,
    TarjetaVideoComponent,
    TarjetaPequeComponent,
    EdicionScreenComponent,
    NoticiaNuevaScreenComponent,
    NacionalesScreenComponent,
    DeportesScreenComponent,
    CovidScreenComponent,
    InternacionalesScreenComponent,
    TecnologiaScreenComponent,
    RegistroScreenComponent,
    ClockComponent,
    CalificacionComponent,
    WeatherComponent,
    ConversorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
