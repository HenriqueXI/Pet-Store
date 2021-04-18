import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'PetStore';
  menus = [
    {'name': 'Home', 'router': '/'},
    {'name': 'Contato', 'router': '/contact'}
  ]
}
