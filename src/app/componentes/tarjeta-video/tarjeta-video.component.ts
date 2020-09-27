import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../../modelo/video.model';
import { DomSanitizer } from '@angular/platform-browser';
import { VideosService } from '../../servicios/videos/videos.service';

@Component({
  selector: 'app-tarjeta-video',
  templateUrl: './tarjeta-video.component.html',
  styleUrls: ['./tarjeta-video.component.css']
})
export class TarjetaVideoComponent implements OnInit {

  @Input()
  public Videos: Video[];

  constructor(private videosServices: VideosService, private _sanitizer: DomSanitizer ) { }

  ngOnInit(): void {
    this.Videos = this.videosServices.getVideos();
  }

  getVideo(url){
    var video, results;

    if (url === null) {
        return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? url : results[1];

    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);
  }

}
