// On importe Component et Service Store.
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

// Création de la classe du composant Home
export class Home {

    // Tableau source, on le garde intact
    private allProducts: any[] = [];
    //Tableau qui est affiché et qui contient les produits
    products: any[] = [];
  
    // Récupération du service Store.
  constructor(
    private store: Store,
    private cdr: ChangeDetectorRef
  ) {
    //Appel du service
    this.store.getProducts().subscribe(data =>{

      //Stocker les données
      this.allProducts = data;

      //Copier pour affichage
      this.products = [...this.allProducts];

      //Forcer l'affichage
      this.cdr.markForCheck();

    });
  }

  // Ordre du tri 
  order: string = 'asc';

  // tri par ordre croissant et décroissant
  sortPriceAsc() {
    this.order = 'asc';
  }
  sortPriceDesc() {
    this.order = 'desc';
  }

  searchText: string = ``;
}
