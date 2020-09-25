import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/modelo/noticia.model';
import { NoticiaService } from 'src/app/servicios/noticia/noticia.service';

@Component({
  selector: 'app-noticias-semana-screnn',
  templateUrl: './noticias-semana-screnn.component.html',
  styleUrls: ['./noticias-semana-screnn.component.css']
})
export class NoticiasSemanaScrennComponent implements OnInit {
  public noticias: Noticia[];

  constructor(private noticiasService: NoticiaService) { }

  ngOnInit(): void {
    this.noticias = this.noticiasService.getNoticias();
  }

}
