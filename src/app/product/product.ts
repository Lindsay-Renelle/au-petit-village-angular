// Import des éléments Angular
import { Component, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

// Import du service
import { Store } from '../store';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrls: ['./product.css'],
})
export class Product {

  // Produit sélectionné
  product: any;

  constructor(
    private route: ActivatedRoute, 
    private store: Store,
    private cdr: ChangeDetectorRef
  ) {

    // On écoute l'URL (id du produit)
    this.route.paramMap.subscribe(params => {

      // Récupérer l'id
      const id = Number(params.get('id'));

      // Récupérer les produits depuis le service
      this.store.getProducts().subscribe((data: any[]) => {

        // Trouver le bon produit
        this.product = data.find((p: any) => p.id == id);

        // Debug (facultatif)
        console.log('ID:', id);
        console.log('Produit:', this.product);
        
        //IMPORTANT : forcer Angular à rafraîchir
         this.cdr.markForCheck();

      });

    });
  }
}
