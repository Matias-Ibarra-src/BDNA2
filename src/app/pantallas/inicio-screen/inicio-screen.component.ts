import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/modelo/noticia.model';
import { NoticiaService } from 'src/app/servicios/noticia/noticia.service';

@Component({
  selector: 'app-inicio-screen',
  templateUrl: './inicio-screen.component.html',
  styleUrls: ['./inicio-screen.component.css']
})
export class InicioScreenComponent implements OnInit {

  public noticias: Noticia[];

  constructor(private noticiasService: NoticiaService) { }

  ngOnInit(): void {
    this.noticias = this.noticiasService.getNoticias();
  }

}
