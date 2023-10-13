import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataComponent } from './data/data.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DataComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DataComponent
  ]
})
export class FormModule { }
