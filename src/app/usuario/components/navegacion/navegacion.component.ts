import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioProviderService } from '../../../core/providers/usuario/usuario-provider.service';
import { Usuario } from '../../../core/models/usuario.model';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.sass']
})
export class NavegacionComponent implements OnInit {

  @Input()
  // tslint:disable-next-line: variable-name
  public id_usuario: string;
  public Usuario$: Observable<Usuario>;

  constructor(private userProvider: UsuarioProviderService) {
    this.Usuario$ = this.GetUserById(this.id_usuario);
    console.log('navegacion');
    console.log(this.id_usuario);
  }

  ngOnInit(): void {
    const btnSwitch = document.querySelector('#switch');

    btnSwitch.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      btnSwitch.classList.toggle('active');

      // Guardamos el modo en localstorage.
      if (document.body.classList.contains('dark')){
        localStorage.setItem('dark-mode', 'true');
      } else {
        localStorage.setItem('dark-mode', 'false');
      }
    });

    // Obtenemos el modo actual.
    if (localStorage.getItem('dark-mode') === 'true'){
      document.body.classList.add('dark');
      btnSwitch.classList.add('active');
    } else {
      document.body.classList.remove('dark');
      btnSwitch.classList.remove('active');
    }
  }

  // tslint:disable-next-line: typedef
  GetUserById(id: string): Observable<Usuario>{
    return this.userProvider.getUsuariobyId(id);
  }
}

