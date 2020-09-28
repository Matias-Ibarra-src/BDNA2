import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/modelo/noticia.model';
import { NoticiaService } from 'src/app/servicios/noticia/noticia.service';

@Component({
  selector: 'app-deportes-screen',
  templateUrl: './deportes-screen.component.html',
  styleUrls: ['./deportes-screen.component.css']
})
export class DeportesScreenComponent implements OnInit {

  public noticias: Noticia[];

  constructor(private noticiasService: NoticiaService) { }

  ngOnInit(): void {
    this.noticias = this.noticiasService.getNoticias();
  }

}
