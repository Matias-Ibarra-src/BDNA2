import { Injectable } from '@angular/core';
import { Video } from '../../modelo/video.model';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  private videos: Video[];

  constructor() {
    this.videos = [
      {
        titulo: 'Coronavirus en Chile: balance 26 de septiembre',
        videoUrl: 'https://www.youtube.com/watch?v=lBfZTI2QOao&ab_channel=T13',
        descripcion: 'El Ministerio de Salud (Minsal) dio un nuevo balance sobre el avance de la pandemia de coronavirus en Chile.  En esa línea, se reportaron 2.109 nuevos contagios y 64 muertes por COVID-19 en las últimas 24 horas.',
        fecha: '26 sept. 2020',
      },
      {
        titulo: 'Resumen de noticias internacionales: Inundaciones en Francia dejan estragos',
        videoUrl: 'https://www.youtube.com/watch?v=Ez5IDyON7fk&ab_channel=Meganoticias',
        descripcion: 'Contigo En La Mañana tomó contacto con el diputado RD, Pablo Vidal y el senador RN, Manuel José Ossandón, para conversar acerca de las alarmantes cifras anunciadas en el balance del Ministerio de Salud. ',
        fecha: '25 sept. 2020',
      },
      {
        titulo: 'Noticias Internacionales | Veneno para Trump, alta de Navalny, huracán en Canadá, asamblea ONU',
        videoUrl: 'https://www.youtube.com/watch?v=XV_VNMgDxFY&ab_channel=Meganoticias',
        descripcion: 'Revisa a continuación un resumen con las noticias más importantes a nivel internacional con la periodista Natasha Kennard.',
        fecha: '20 sept. 2020',
      },
      {
        titulo: 'MINSAL: Chile volvió a superar los 2.000 casos de Covid-19 - Contigo En La Mañana',
        videoUrl: 'https://www.youtube.com/watch?v=IE468qo60IY&ab_channel=Chilevisi%C3%B3n',
        descripcion: 'Revisa un completo reporte internacional con lo más destacado durante el día, por ejemplo, el alta del opositor ruso -Alexei Navalny- tras el supuesto envenenamiento, la acusación formal a una mujer de intentar envenenar a Donald Trump y del huracán que podría impactar en Canadá',
        fecha: '23 sept. 2020',
      },
      {
        titulo: 'Noticias Internacionales | Segunda ola, protestas, tormentas tropicales y caídas de bolsas',
        videoUrl: 'https://www.youtube.com/watch?v=YjsBPpznoto&ab_channel=Meganoticias',
        descripcion: 'Revisa un resumen de las principales noticias internacionales, destacando masivas protestas en Argentina, las caídas de las bolsas en el mundo por temor a una segunda ola de contagios de coronavirus, avance de tormenta tropical en Estados Unidos, entre otras. ',
        fecha: '22 sept. 2020',
      },
      {
        titulo: 'Trump moviliza tropas al Golfo por Irán | #TPANoticias Internacional',
        videoUrl: 'https://www.youtube.com/watch?v=nSRWkjhhe9Q&ab_channel=Televisi%C3%B3nP%C3%BAblicaNoticias',
        descripcion: 'El periodista especializado en Medio Oriente, Ezequiel Kopel, analizó las relaciones bilaterales entre Estados Unidos e Irán y conversó acerca de una posible confrontación bélica entre ambos países.',
        fecha: '18 may. 2019',
      },
      {
        titulo: 'Noticias internacionales | Caso Madeleine McCann, segunda ola covid-19, erupción volcán en Ecuador',
        videoUrl: 'https://www.youtube.com/watch?v=2J4uc-sU-Nw&ab_channel=Meganoticias',
        descripcion: 'Revisa un completo informe internacional, donde se destaca la preocupación por la segunda ola de contagios de covid-19 en Europa, la que cada día suma nuevos contagios. ',
        fecha: '22 sept. 2020',
      },
      {
        titulo: 'Preparan ensayos del primer ojo biónico que devolvería la vista a personas ciegas',
        videoUrl: 'https://www.youtube.com/watch?v=gsP2dloWDcg&ab_channel=Meganoticias',
        descripcion: 'Un grupo de científicos australianos está pronto a convertir la ciencia ficción en realidad, pues se están preparando para probar en seres humanos el primer ojo biónico del mundo.',
        fecha: '22 sept. 2020',
      }
    ];
  }

  public getVideos(): Video[]{
    return this.videos;
  }
}
