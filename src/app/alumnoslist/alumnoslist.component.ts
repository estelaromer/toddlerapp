import { Component, OnInit } from '@angular/core';
import { UsersService } from './../users.service';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-alumnoslist',
  templateUrl: './alumnoslist.component.html',
  styleUrls: ['./alumnoslist.component.css']
})
export class AlumnoslistComponent implements OnInit {
  datos: any;
  alumnos: any[];
  constructor(private usersService: UsersService, private localstorageService: LocalStorageService) { }

  ngOnInit() {
    this.datos = JSON.parse(this.localstorageService.get('datosLogin'));
    console.log(this.datos.idUsuario);
    console.log(this.datos.usuario);
    this.usersService.getAlumnos(this.datos.idUsuario, this.datos.usuario).then(res => {
      this.alumnos = res.json();
      console.log(this.alumnos)

    });
  }

}
