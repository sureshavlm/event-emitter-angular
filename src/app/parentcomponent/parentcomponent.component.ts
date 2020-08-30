import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/products.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-parentcomponent',
  templateUrl: './parentcomponent.component.html',
  styleUrls: ['./parentcomponent.component.css']
})

export class ParentcomponentComponent implements OnInit {

  counter: number = 0;
  products: any;
  userService: UserService;
  
  constructor(public productService: ProductService, 
     _us: UserService) {
       this.userService = _us;
       this.fetchProducts();
   }

  ngOnInit() {
  }

  fetchProducts() {
    this.products = this.productService.getProducts();
  }

  incrementInParent() {
  	this.counter = this.counter + 1;
  }

  counterChangeEventHandler(value) {
  	this.counter = value;
  }

}
