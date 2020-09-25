import { Injectable } from '@angular/core';
import { Video } from '../../modelo/video.model';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  private videos: Video[];

  constructor() {
    this.videos = [
      {
        titulo: 'como insertar videos',
        videoUrl: 'https://www.youtube.com/embed/6eTdrwYaokM',
      }
    ];
  }

  public getVideos(): Video[]{
    return this.videos;
  }
}
