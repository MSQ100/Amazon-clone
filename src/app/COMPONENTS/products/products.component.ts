import { ShoppingCartService } from './../../SERVICE/shopping-cart.service';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
@Input() products!:any[];

  constructor(private shopping_cart:ShoppingCartService) { }

  ngOnInit(): void {
  }
  addToCard(p: any){
    this.shopping_cart.addProduct(p)
  }
    }


