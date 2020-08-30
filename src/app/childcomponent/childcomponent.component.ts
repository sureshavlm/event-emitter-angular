import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../service/products.service';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements OnInit {

  @Input()
  counter: number;

  products: any;

  @Output()
  counterchange: EventEmitter<Object>; //my custom event in child comp

  constructor(public productService: ProductService) { 
    this.counterchange = new EventEmitter();
    this.products = productService.getProducts();
  }

  ngOnInit() {
  }

  incrementInChild() {
  	this.counter += 1;
  	this.counterchange.emit(this.counter);
  }

  addItem() {
      this.productService.addProduct({
        name: 'iMac',
        price: 150000,
        quantity: 1
      });
  }

}
