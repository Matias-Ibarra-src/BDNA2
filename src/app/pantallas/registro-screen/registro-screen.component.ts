import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelo/usuario.model';
import { LoginService } from '../../servicios/login/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registro-screen',
  templateUrl: './registro-screen.component.html',
  styleUrls: ['./registro-screen.component.css']
})
export class RegistroScreenComponent implements OnInit {

  public usuario: Usuario;
  public validacion: number;

  constructor(private usuarioservicio: LoginService, private toastr: ToastrService) {
    this.validacion = 1;
  }

  // tslint:disable-next-line: typedef
  comprobarInicio(usuario: Usuario){
    if (!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(usuario.Email))){
      this.toastr.error('ingrese una dirreccion de correo valida', 'correo invalido');
      this.validacion = 0;
    }
    if (usuario.Password == null || usuario.Password.length === 0 || /^\s+$/.test(usuario.Password)){
      this.toastr.error('ingrese una contraseña con almenos 6 caracteres', 'contraseña invalida');
      this.validacion = 0;
    }
  }

  // tslint:disable-next-line: typedef
  comprobarRegistro(usuario: Usuario){
    if (!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(usuario.Email))){
      this.toastr.error('ingrese una dirreccion de correo valida', 'correo invalido');
      this.validacion = 0;
    }
    if (usuario.Password == null || usuario.Password.length === 0 || /^\s+$/.test(usuario.Password)){
      this.toastr.error('ingrese una contraseña con almenos 6 caracteres', 'contraseña invalida');
      this.validacion = 0;
    }
    // tslint:disable-next-line: max-line-length
    if (usuario.Password == null || usuario.Password.length === 0 || /^\s+$/.test(usuario.Password) || (usuario.Password === usuario.confirmacion)){
      this.toastr.error('las contraseñas no coinciden', 'contraseña invalida');
      this.validacion = 0;
    }
    if (usuario.Nombre == null || usuario.Nombre.length === 0 || /^\s+$/.test(usuario.Nombre)){
      this.toastr.error('ingrese un nombre', 'Nombre invalido');
      this.validacion = 0;
    }
    if (usuario.Apellido == null || usuario.Apellido.length === 0 || /^\s+$/.test(usuario.Apellido)){
      this.toastr.error('ingrese su apellido', 'Apellido invalido');
      this.validacion = 0;
    }

    if (this.validacion === 1){
      this.nuevoUsuario();
    }

  }

  ngOnInit(): void {
    this.usuario = this.usuarioservicio.nuevoUsuario();
  }

  nuevoUsuario(): void {
    this.usuarioservicio.agregarUsuario(this.usuario);
    this.usuario = this.usuarioservicio.nuevoUsuario();
  }

}
