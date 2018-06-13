import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 
import { formGroupNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  searchForm: FormGroup;
  constructor() { 
    this.searchForm = new FormGroup({
      search: new FormControl('')
    })
  }


  ngOnInit() {

  }
}
