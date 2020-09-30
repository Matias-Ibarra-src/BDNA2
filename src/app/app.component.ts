import { Component, } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public darkmode: boolean;
  // tslint:disable-next-line: typedef
  handleMode(darkmode: boolean){
    this.darkmode = darkmode;
  }

}
