import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './../users.service';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-loginarea',
  templateUrl: './loginarea.component.html',
  styleUrls: ['./loginarea.component.css']
})
export class LoginareaComponent implements OnInit {

  isLogged: boolean;
  constructor(private router: Router, private usersService: UsersService, private localstorageService: LocalStorageService) { 
    this.isLogged = this.usersService.isLogged();
  }

  handleLoginArea() {
    this.router.navigate(['login']);
  }

  handleLogoutArea() {
    this.localstorageService.remove('datosLogin');
    this.router.navigate([''])
  }
  ngOnInit() {
    this.isLogged = this.usersService.isLogged();
  }

}
