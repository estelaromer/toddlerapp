import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 
import { debounceTime, distinctUntilChanged  } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UsersService]
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private router: Router, private usersService: UsersService) { 
    this.signupForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      correo: new FormControl('', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
      telefono: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
      // tslint:disable-next-line:max-line-length
      contrasena: new FormControl('', [Validators.required, Validators.pattern(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})/)]),
      contrasenaRepeat: new FormControl('', Validators.required)
    });
  }


  handleSignupSubmit(pValues) {
    let subruta = localStorage.getItem('tipoUsuario');
    this.usersService.nuevoUsuario(pValues, subruta);
    this.router.navigate(['../login']);
  }

  ngOnInit() {

    
  }

}
