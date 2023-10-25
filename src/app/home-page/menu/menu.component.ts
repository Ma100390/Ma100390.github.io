import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Input() showMenu: boolean = true;

  constructor(private router: Router) { }

  navigateToPage2() {
    console.log('Cliccato ');
    this.router.navigate(['/pagina1']);
  }
}