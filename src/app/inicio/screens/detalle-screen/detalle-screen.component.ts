import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Noticia } from 'src/app/core/models/noticia.model';
import { NoticiasProviderService } from '../../../core/providers/noticias/noticias-provider.service';

@Component({
  selector: 'app-detalle-screen',
  templateUrl: './detalle-screen.component.html',
  styleUrls: ['./detalle-screen.component.sass']
})
export class DetalleScreenComponent implements OnInit {

  public noticia$: Observable<Noticia>;
  constructor(
    private noticiaprovider: NoticiasProviderService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id: string =  this.activateRoute.snapshot.params['id'];
    this.noticia$ = this.GetById(id);
  }

  // tslint:disable-next-line: typedef
  GetById(id: string): Observable<Noticia>{
    return this.noticiaprovider.getNoticiabyId(id);
  }

}
