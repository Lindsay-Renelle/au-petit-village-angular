import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice',

  //importation Angular Standalone
  standalone: true
})

export class SortByPricePipe implements PipeTransform {

  transform(products: any[], order: string): any[]{

    //Si pas de produits => on retourne vide
    if(!products) return [];

    //Copie tableau 
    let sortedProducts = [...products];

    //Tri selon le paramètre
    if (order === "asc") {
      //Prix croissant
      sortedProducts.sort((a,b) => a.price - b.price);
    } else if (order === "desc"){
      //Prix décroissant
      sortedProducts.sort ((a,b) => b.price - a.price)
    }
    
    //Retourner le tableau trié
    return sortedProducts;
  }
}