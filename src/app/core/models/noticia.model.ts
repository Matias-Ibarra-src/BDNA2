export interface Noticia{
  _id?: string;
  titulo: string;
  imgUrl: string;
  resumen: string;
  cuerpo: string;
  estado: string;
  fecha: string;
  categoria: string;
  mostrar?: string[];
  relacion?: string[];
}
