import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import {Store} from '../store';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})


export class Product {

  product: any;

  constructor(private route: ActivatedRoute, private store: Store) {

  // Récupérer l'id dans l'URL
  const id = Number(this.route.snapshot.paramMap.get('id'));

  // Récupérer les produits
  this.store.getProducts().subscribe(data => {

    // Trouver le bon produit
    this.product = data.find(p => p.id === id);

    });
  }
}