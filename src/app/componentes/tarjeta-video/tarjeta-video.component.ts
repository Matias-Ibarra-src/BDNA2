import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../../modelo/video.model';

@Component({
  selector: 'app-tarjeta-video',
  templateUrl: './tarjeta-video.component.html',
  styleUrls: ['./tarjeta-video.component.css']
})
export class TarjetaVideoComponent implements OnInit {

  @Input()
  public tarjetaVideo: Video;

  constructor() { }

  ngOnInit(): void {
  }

}
