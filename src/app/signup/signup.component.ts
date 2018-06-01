import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 
import { debounceTime, distinctUntilChanged  } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  tipoCodigo: string;
  codigoDemo: string;
  signupForm: FormGroup;

  constructor(private router: Router) { 
    this.signupForm = new FormGroup({
      codigo: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      correo: new FormControl('', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
      telefono: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
      // tslint:disable-next-line:max-line-length
      contrasena: new FormControl('', [Validators.required, Validators.pattern(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})/)]),
      contrasenaRepeat: new FormControl('', Validators.required)
    });
  }

  codigoValidator(control) {
    console.log(this.codigoDemo);
    if (control.value === this.codigoDemo) {
      return null;
    } else {
      return {'error': 'Los códigos no coinciden'};
    }
  }

  handleSignupSubmit(pValues) {
    //registrarUsuario
    this.router.navigate(['../login']);
  }

  ngOnInit() {
    switch(localStorage.getItem('tipoUsuario')) {
      case 'educadores':
        this.tipoCodigo = 'clase';
        this.codigoDemo = localStorage.getItem('codClase');
        break;
      case 'familiares':
        this.tipoCodigo = 'alumno';
        this.codigoDemo = localStorage.getItem('codAlumno');
        break;
    }
  }

}
