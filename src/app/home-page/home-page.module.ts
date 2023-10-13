import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    NavbarComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [  
    NavbarComponent,
    MenuComponent,   
    FooterComponent 
  ]
})
export class HomePageModule { }
