import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Noticia } from 'src/app/modelo/noticia.model';
import { NoticiaService } from '../../servicios/noticia/noticia.service';

@Component({
  selector: 'app-detalle-noticia-screen',
  templateUrl: './detalle-noticia-screen.component.html',
  styleUrls: ['./detalle-noticia-screen.component.css']
})
export class DetalleNoticiaScreenComponent implements OnInit {

  public noticia: Noticia;

  constructor(
    private activateRoute: ActivatedRoute,
    private detalleService: NoticiaService,
  ) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params['id'];
    this.noticia = this.detalleService.getNoticiaById(id);

  }

}
