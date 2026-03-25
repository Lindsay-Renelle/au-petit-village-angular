// On importe Component et Service Store.
import { Component } from '@angular/core';
import { Store } from '../store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
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
  constructor(private store: Store) {
    //Appel du service
    this.store.getProducts().subscribe(data =>{

      //Stocker les données
      this.allProducts = data;

      //Copier pour affichage
      this.products = [...this.allProducts];

    });
  }
  // tri par ordre croissant et décroissant
  sortPriceAsc() {
    this.products = [...this.products].sort((a, b) => a.price - b.price);
  }
  sortPriceDesc() {
    this.products = [...this.products].sort ((a, b) => b.price - a.price);
  }

  searchProduct(event: any) {
    // Récupèration du texte 
    const input = event.target as HTMLInputElement;
    const value = input.value.toLocaleLowerCase();

    //Regarder dans le taableau source
    this.products = this.allProducts.filter(product =>
      //Garder ceux qui correspondent
      product.name.toLowerCase().includes(value)
    );
  }
}






