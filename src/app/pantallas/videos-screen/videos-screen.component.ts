import { Component, OnInit } from '@angular/core';
import { Video } from '../../modelo/video.model';
import { VideosService } from '../../servicios/videos/videos.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-videos-screen',
  templateUrl: './videos-screen.component.html',
  styleUrls: ['./videos-screen.component.css']
})
export class VideosScreenComponent implements OnInit {

  public videos: Video[];

  constructor(private videosServices: VideosService,private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.videos = this.videosServices.getVideos();
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
