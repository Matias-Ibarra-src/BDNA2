import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {
  @Output()
  modeEmitter = new EventEmitter<boolean>();
  public darkmode: boolean;
  constructor() {
    this.darkmode = false;
  }

  // tslint:disable-next-line: typedef
  onPropagar(){
    this.darkmode = !this.darkmode;
    this.modeEmitter.emit(this.darkmode);
  }
  ngOnInit(): void {

  }
}
