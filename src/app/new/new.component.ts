import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  newForm: FormGroup;
  codigoIncorrecto: boolean;
  problemaRegistro: boolean;

  constructor(private router: Router, private userService: UsersService, private localStorageService: LocalStorageService) { 
    this.newForm = new FormGroup({
      foto: new FormControl(''),
      codigoAlumno: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      fechaNacimiento: new FormControl('', Validators.required),
      horaEntrada: new FormControl('', Validators.required),
      horaSalida: new FormControl('', Validators.required)
    });
    this.codigoIncorrecto = false;
    this.problemaRegistro = false;
  }

  handleNewSubmit(pdatos) {
    let id = JSON.parse(this.localStorageService.get('datosLogin')).idUsuario
    pdatos.idFamiliar = id;
    this.userService.newAlumno(pdatos).then(res => {
      let status = res.json()
      if(status.error) {
        if(status.error === 'Código incorrecto') {
          this.codigoIncorrecto = true;
        } else if (status.error === 'Registro KO') {
          this.problemaRegistro = true;
        }
      } else if (status.success) {
        this.router.navigate(['/app','alumnos'])
      }
        
    
    })
  }
  ngOnInit() {
  }

}
