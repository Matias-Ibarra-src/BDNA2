import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelo/usuario.model';
import { LoginService } from '../../servicios/login/login.service';

@Component({
  selector: 'app-registro-screen',
  templateUrl: './registro-screen.component.html',
  styleUrls: ['./registro-screen.component.css']
})
export class RegistroScreenComponent implements OnInit {

  public usuario: Usuario;

  constructor(private usuarioservicio: LoginService) {
  }

  ngOnInit(): void {
    this.usuario = this.usuarioservicio.nuevoUsuario();
  }

  nuevoUsuario(): void {
    this.usuarioservicio.agregarUsuario(this.usuario);
    this.usuario = this.usuarioservicio.nuevoUsuario();
  }

}
