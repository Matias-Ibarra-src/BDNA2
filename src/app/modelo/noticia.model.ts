export interface Noticia{
  _id?: number;
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
