import { Injectable } from '@angular/core';
import { Noticia } from 'src/app/modelo/noticia.model';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  private noticias: Noticia[];

  constructor() {
    this.noticias = [
      {
        _id: 1,
        titulo: "PLEBISCITO 2020: Una cobertura especial de Emol",
        imgUrl: "https://static.emol.cl/emol50/Fotos/Pandora/2020/09/08/file_20200908080712.jpg",
        resumen: "El presidente del consejo directivo del organismo, Patricio Santamaría, señaló que si alguien desconoce ser un caso activo y así se determina en el lugar el 25 de octubre, deberá votar y luego la autoridad sanitaria tomará las medidas respectivas.",
        cuerpo: "asñldañlksd"
      },
      {
        _id: 2,
        titulo: "Walmart actualiza su aplicación de compras online y proyecta que la revolución del comercio digital \“seguirá creciendo\”",
        imgUrl: "https://static.emol.cl/emol50/Fotos/2020/09/14/file_20200914174647_0lx0.jpg",
        resumen: "Eli Senerman, gerente de Walmart Tech, explicó que la nueva propuesta permitirá a los clientes de más de 60 comunas de Arica a Punta Arenas optar por despacho a domicilio de los productos",
        cuerpo: "sañkdjñkalsd"
      },
      {
        _id: 3,
        titulo: "JAPÓN: Quién es Yoshihide Suga, el elegido para suceder a Abe",
        imgUrl: "https://static.emol.cl/emol50/Fotos/Pandora/2020/09/14/file_20200914190535.jpg",
        resumen: "Este experimentado político era el favorito para triunfar en las elecciones internas del partido oficialista para ser el próximo jefe de Gobierno nipón, lo que debería confirmarse este miércoles.",
        cuerpo: "asdjasñlkd"
      },
      {
        _id: 4,
        titulo: "Rueda comparó su proceso en la \"Roja\" con el de Bielsa",
        imgUrl: "https://static.emol.cl/emol50/Fotos/Pandora/2020/09/15/file_20200915152129.jpg",
        resumen: "Marcelo Bielsa dejó de ser el entrenador de Chile hace casi una década. Sin embargo, su nombre no se olvida. A Reinaldo Rueda, actual DT de la \"Roja\", se le consultó si el argentino es un peso para él",
        cuerpo: "alsjdlkajsd"

      },
      {
        _id: 5,
        titulo: "Los temas que para la oposición no pueden faltar en una nueva Carta Magna",
        imgUrl: "https://static.emol.cl/emol50/Fotos/2020/09/14/file_20200914153751.jpg",
        resumen: "Diez conceptos clave fueron los que el Presidente Sebastián Piñera envió a sus ministros en una especie de \"decálogo\" de temas que no pueden dejar de estar presentes en una nueva Constitución. Sus planteamientos fueron criticados por la oposición desde donde lo acusaron de considerar \"más de lo mismo\"",
        cuerpo: "asdjklkasjd"
      },
      {
        _id: 6,
        titulo: "Secretario técnico del Barcelona llena de elogios a Vidal y lanza: \"Quiero darle las gracias por estos dos años\"",
        imgUrl: "https://static.emol.cl/emol50/Fotos/2020/09/15/file_20200915155148.jpg",
        resumen: "La partida de Arturo Vidal del Barcelona para fichar en el Inter de Milán de Alexis Sánchez parece ser cuestión de horas para que se concrete.",
        cuerpo: "La partida de Arturo Vidal del Barcelona para fichar en el Inter de Milán de Alexis Sánchez parece ser cuestión de horas para que se concrete.\n \nEs que ahora el propio secretario técnico del cuadro catalán, Ramón Planes, confirmó que el club trabaja en una salida para el bicampeón de América con la Roja. \n Fue en la presentación oficial de Miralem Pjanic que el dirigente del conjunto blaugrana reconoció: \"Es cierto que Arturo Vidal está avanzando en una negociación para su posible salida, pero no está cerrado\".\n Asimismo, le dedicó elogios: \"Quiero aprovechar de darle las gracias por estos dos años que nos ha dado. Es un chico extraordinario, con un corazón y una entrega enorme. Es un jugador que ha sido importante en el grupo, con esa energía que transmite\". Consignar que la prensa española y el medio RAC1 aseguraron que el Inter de Milán y el Barcelona ya alcanzaron un acuerdo para el fichaje de Vidal.",
      }
    ];
  }

  public getNoticias(): Noticia[]{
    return this.noticias;
  }

  public getNoticiaById(id: string): Noticia{
    return this.noticias.find((noticia: Noticia) => noticia._id.toString() === id)
  }
}
