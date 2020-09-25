import { Component, Input, OnInit } from '@angular/core';
import { Noticia } from 'src/app/modelo/noticia.model';

@Component({
  selector: 'app-tarjeta-semanal',
  templateUrl: './tarjeta-semanal.component.html',
  styleUrls: ['./tarjeta-semanal.component.css']
})
export class TarjetaSemanalComponent implements OnInit {
  @Input()
  public semanaTarjeta: Noticia;

  constructor() { }

  ngOnInit(): void {
  }

}
