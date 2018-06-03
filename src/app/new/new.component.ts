import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 
import { debounceTime, distinctUntilChanged  } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  newForm: FormGroup;

  constructor(private router: Router) { 
    this.newForm = new FormGroup({
      foto: new FormControl(''),
      nombre: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      fechaNacimiento: new FormControl(''),
      horaEntrada: new FormControl(''),
      horaSalida: new FormControl('')
    });
  }

  handleNewSubmit(pdatos) {
    this.router.navigate(['../app/home']);
  }
  ngOnInit() {
  }

}
