import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { UsersService } from './../users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  infoProfile: any;

  constructor(private localstorageService: LocalStorageService, private usersService: UsersService) { 

  }

  ngOnInit() {
    let datos = JSON.parse(this.localstorageService.get('datosLogin'));
    console.log(datos.idUsuario);
    console.log(datos.usuario);
    this.usersService.getUserProfile(datos.idUsuario, datos.usuario).then(res => {
      this.infoProfile = res.json();
      console.log(this.infoProfile);
    });
  }

}
