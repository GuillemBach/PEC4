import { Component } from '@angular/core';
import { Wine, Food } from '../wine-food';

@Component({
  selector: 'app-wineitem',
  templateUrl: './wineitem.component.html',
  styleUrls: ['./wineitem.component.css']
})
export class WineitemComponent {
  wine: Wine ={
    name: 'Domaine de la Butte La Pied de la Butte',
    imageURL: 'https://images.vivino.com/thumbs/niB9isLbQbyshK1xDVoiQA_pb_x600.png',
    price: 19.95,
    isOnSale: true,
    quantityInCart: 0,
    foodPairing: [{
      name: 'Pan',
      kcal: 200,
      vegan: true,
      gluten:true
    }]
  };

  cambiarColor(){
    if (this.wine.isOnSale === true){
      return 'purple';
    } else {
      return 'white';
    }
  };

  masCantidad(){
    if (this.wine.quantityInCart >= 0){
      this.wine.quantityInCart++;
    }
  };

  menosCantidad(){
    if (this.wine.quantityInCart > 0){
      this.wine.quantityInCart--;
    }else{

    }
  };   
}
