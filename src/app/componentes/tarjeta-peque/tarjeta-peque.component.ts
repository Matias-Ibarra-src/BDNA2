import { Component, Input, OnInit } from '@angular/core';
import { Noticia } from '../../modelo/noticia.model';

@Component({
  selector: 'app-tarjeta-peque',
  templateUrl: './tarjeta-peque.component.html',
  styleUrls: ['./tarjeta-peque.component.css']
})
export class TarjetaPequeComponent implements OnInit {
  @Input()
  public tarjetaPeque: Noticia;

  constructor() { }

  ngOnInit(): void {
  }

}
