import { Component, Input, OnInit } from '@angular/core';
import { Noticia } from 'src/app/modelo/noticia.model';

@Component({
  selector: 'app-tarjeta-detalle',
  templateUrl: './tarjeta-detalle.component.html',
  styleUrls: ['./tarjeta-detalle.component.css']
})
export class TarjetaDetalleComponent implements OnInit {
  @Input()
  public DetalleTarjeta: Noticia;

  constructor() { }

  ngOnInit(): void {
  }

}
