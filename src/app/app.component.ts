import { Component } from '@angular/core';
import { CategorieService } from './categorie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sito_internet';
  showDataComponent: boolean = false;
  showMenuComponent: boolean = true;
  products: any[] = [];
  selectedCategory: string = '';
  showProdottiComponent: boolean = true;
  
  constructor(private categorieService: CategorieService) { }

  onCategorySelected(category: string) {
    this.selectedCategory = category;
    this.categorieService.getProductsByCategory(category).subscribe(products => {
      this.products = products;
      console.log('Prodotti ottenuti per la categoria:', category, this.products);
    });
  }
  onProductClicked() {
    this.showProdottiComponent = false;
  }

  toggleDataComponent() {
    this.showDataComponent = !this.showDataComponent;
    console.log('Stato di showDataComponent:', this.showDataComponent);
  }

  toggleMenuComponent() {
    this.showMenuComponent = !this.showMenuComponent;
    console.log('Stato di showMenuComponent:', this.showMenuComponent); 
  }
  handleProductClicked() {
    this.showProdottiComponent = !this.showProdottiComponent; 
  }
  
}
