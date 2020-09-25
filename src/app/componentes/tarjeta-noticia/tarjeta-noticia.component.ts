import { Component, Input, OnInit } from '@angular/core';
import { Noticia } from 'src/app/modelo/noticia.model';

@Component({
  selector: 'app-tarjeta-noticia',
  templateUrl: './tarjeta-noticia.component.html',
  styleUrls: ['./tarjeta-noticia.component.css']
})
export class TarjetaNoticiaComponent implements OnInit {

  @Input()
  public noticiaTarjeta: Noticia;

  constructor() { }

  ngOnInit(): void {
  }

}
