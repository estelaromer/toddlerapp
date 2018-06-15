import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  searchForm: FormGroup;
  constructor(private router: Router) { 
    this.searchForm = new FormGroup({
      search: new FormControl('')
    })
  }


  ngOnInit() {

  }
}
