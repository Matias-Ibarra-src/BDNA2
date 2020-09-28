import { Injectable } from '@angular/core';
import { Usuario } from '../../modelo/usuario.model';
// tslint:disable-next-line: import-blacklist
import 'rxjs/Rx';
// tslint:disable-next-line: import-blacklist
import { Observable, Subject } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private usuarios: Usuario[];
  private usuarios$: Subject<Usuario[]> = new Subject<Usuario[]>();

  constructor() {
    this.usuarios = [];
  }

  // tslint:disable-next-line: typedef
  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
    this.usuarios$.next(this.usuarios);
  }

  getUsuarios$(): Observable<Usuario[]> {
    return this.usuarios$.asObservable();
  }

  nuevoUsuario(): Usuario{
    return {
      id: this.usuarios.length,
      rol: '',
      Nombre: '',
      Apellido: '',
      Email: '',
      Password: '',
    };
  }
}
