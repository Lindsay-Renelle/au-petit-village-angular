import { Component, ChangeDetectorRef } from '@angular/core';
import { Store } from '../store';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { SortByPricePipe } from '../sort-by-price-pipe';
import { SortBySearchPipe } from '../sort-by-search-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, SortByPricePipe, SortBySearchPipe, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  // Tableau source
  private allProducts: any[] = [];

  // Tableau affiché
  products: any[] = [];

  constructor(
    private store: Store,
    private cdr: ChangeDetectorRef
  ) {
    // Récupération des produits via le service
    this.store.getProducts().subscribe(data => {
      this.allProducts = data;
      this.products = [...this.allProducts];
      this.cdr.markForCheck();
    });
  }

  // Ordre du tri
  order: string = 'asc';

  sortPriceAsc() {
    this.order = 'asc';
  }

  sortPriceDesc() {
    this.order = 'desc';
  }

  // Texte de recherche
  searchText: string = '';
}
