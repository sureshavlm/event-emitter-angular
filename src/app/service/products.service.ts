import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

	private products: any;

	constructor() {
		
	}

	fetchProducts() {
		this.products = [
			{ name: 'Lenova Laptop', price: 60000, quantity: 1},
			{ name: 'Dell Laptop', price: 65000, quantity: 1},
			{ name: 'Macbook Pro', price: 120000, quantity: 1},
			{ name: 'Sony Laptop', price: 90000, quantity: 1}
			];
	}
	
	getProducts() {
		return this.products;
	}

	addProduct(product: any) {
		this.products.push(product); //adding item to array list

		//first make HTTP call to service and store new product in DB
		//on success update the model with new products
	}
}