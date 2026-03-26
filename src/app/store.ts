// Import "Injectable" depuis Angular ce qui permet de transformer la classe en service
import { Injectable } from '@angular/core';
import {HttpClient } from  "@angular/common/http";

//Décorateur qui indique que cette classe est un service
@Injectable({
  providedIn: 'root',
   // 'root' signifie que ce service est disponible dans toute l'application
})

// Création du service nommé Store
export class Store {

  //Chemin vers le fichier JSON
  private url = "/products.json";

  constructor(private http: HttpClient){}

  // Récupérer les produits depuis le JSON
  getProducts() {
    return this.http.get<any[]>(this.url);
  }
}
