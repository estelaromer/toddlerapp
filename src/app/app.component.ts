import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngOnInit() {
    localStorage.setItem('codClase', 'FLROED1478');
    localStorage.setItem('codAlumno', 'FLROFA5678');
    localStorage.setItem('ruta','homepage');
  }
}
