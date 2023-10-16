import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategorieService } from 'src/app/categorie.service';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() contactClicked: EventEmitter<void> = new EventEmitter<void>();
  @Output() productClicked: EventEmitter<void> = new EventEmitter<void>();
  @Output() categorySelected: EventEmitter<string> = new EventEmitter<string>();
  @Output() onMenu: EventEmitter<void> = new EventEmitter<void>();
  @Input() showProdotti: boolean = false;

  showDetail: boolean = false;
  categories: string[] = [];
  products: Product[] = [];
  showPreviewInfo: boolean = false;
  lightboxOpen: boolean = false;
  selectedProduct: Product | null = null;
  currentImageIndex: number = 0;
  isProductClicked: boolean = false;
  isContactClicked: boolean = false;
  isSelectProduct: boolean = false;

  constructor(private categorieService: CategorieService) { }

 



  showLightbox(product: Product) {
    this.lightboxOpen = true;
    this.selectedProduct = product;
  }

  closeLightbox() {
    this.lightboxOpen = false;
    this.selectedProduct = null;
  }



  ngOnInit(): void {
    this.categorieService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  onCategorySelected(category: string) {
    this.categorySelected.emit(category);

    this.categorieService.getProductsByCategory(category).subscribe(products => {
      this.products = products;
    });
      this.isSelectProduct = false;
  }

  onContactClick() {
    this.contactClicked.emit();
    this.isContactClicked = !this.isContactClicked;
  }
  onMenuClick() {
    // Ritardiamo l'emissione dell'evento onMenu utilizzando setTimeout
    setTimeout(() => {
      this.onMenu.emit();
    }, 1000); // Emetti l'evento dopo 1000 millisecondi (1 secondo)
  }

  onProductClick() {
    this.productClicked.emit();
    this.isProductClicked = !this.isProductClicked;
    this.isSelectProduct = this.isProductClicked;
}
}