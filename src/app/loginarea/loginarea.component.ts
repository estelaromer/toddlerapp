import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginarea',
  templateUrl: './loginarea.component.html',
  styleUrls: ['./loginarea.component.css']
})
export class LoginareaComponent implements OnInit {

  constructor(private router: Router) { }

  handleLoginArea() {
    this.router.navigate(['login']);
  }
  ngOnInit() {
  }

}
