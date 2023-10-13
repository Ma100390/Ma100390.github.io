import { Component } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {
  showMenuComponent: boolean = true;
  toggleMenuComponent() {
    this.showMenuComponent = !this.showMenuComponent;
    console.log('Stato di showMenuComponent:', this.showMenuComponent); // Aggiunto console.log
  }
}
