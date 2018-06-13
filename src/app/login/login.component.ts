import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  noRegistrado: boolean;
  contrasenaIncorrecta: boolean;
  constructor(private router: Router, private userService: UsersService, private localStorageService: LocalStorageService) { 
    this.noRegistrado = false;
    this.contrasenaIncorrecta = false;
    this.loginForm = new FormGroup({
      tipoLogin: new FormControl(''),
      correo: new FormControl('', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
      contrasena: new FormControl('', [Validators.required, Validators.pattern(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})/)]),
    });
  }

  handleSubmitLogin(pDatos) {
    this.userService.validateLogin(pDatos).then(res => {
      let status = res.json();
      if (status.err && status.err === 'Usuario no registrado') {
        this.noRegistrado = true;
        console.log(this.noRegistrado);
      } else if (status.err && status.err === 'Contraseña incorrecta') {
        this.noRegistrado = false;
        this.contrasenaIncorrecta = true;
        console.log(this.contrasenaIncorrecta);
      } else {
        console.log(status);
        this.noRegistrado = false;
        this.contrasenaIncorrecta = false;
        this.localStorageService.set('datosLogin', JSON.stringify({idUsuario: status.id, usuario: pDatos.tipoLogin, fecha: new Date()}));
        this.router.navigate(['/app']);
      }

    });

  }
  ngOnInit() {
  }

}
