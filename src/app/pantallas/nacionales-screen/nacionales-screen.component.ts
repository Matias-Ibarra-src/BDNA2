import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/modelo/noticia.model';
import { NoticiaService } from 'src/app/servicios/noticia/noticia.service';

@Component({
  selector: 'app-nacionales-screen',
  templateUrl: './nacionales-screen.component.html',
  styleUrls: ['./nacionales-screen.component.css']
})
export class NacionalesScreenComponent implements OnInit {

  public noticias: Noticia[];

  constructor(private noticiasService: NoticiaService) { }

  ngOnInit(): void {
    this.noticias = this.noticiasService.getNoticias();
  }
}
