import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/modelo/noticia.model';
import { NoticiaService } from 'src/app/servicios/noticia/noticia.service';

@Component({
  selector: 'app-internacionales-screen',
  templateUrl: './internacionales-screen.component.html',
  styleUrls: ['./internacionales-screen.component.css']
})
export class InternacionalesScreenComponent implements OnInit {

  public noticias: Noticia[];

  constructor(private noticiasService: NoticiaService) { }

  ngOnInit(): void {
    this.noticias = this.noticiasService.getNoticias();
  }
}
