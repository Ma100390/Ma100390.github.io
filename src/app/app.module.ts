import { FormModule } from './form/form.module';
import { HomePageModule } from './home-page/home-page.module';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';

import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';



const routes: Routes = [

  { path: '', redirectTo: '/pagina1', pathMatch: 'full' },
  { path: 'pagina1', component: Page1Component },
  { path: 'chi_Siamo',component: ChiSiamoComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    ChiSiamoComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HomePageModule,
    FormModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],exports: [RouterModule]
})
export class AppModule { }
