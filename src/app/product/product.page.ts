import { Component, OnInit } from '@angular/core';
import { DataapiService } from '../dataapi.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  products: any = [];
  constructor(private dataapi: DataapiService) {
    this.loadProducts();
  }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.dataapi.showproduct().subscribe({
      next: (data:any) => {
        this.products = data;
        console.log('Products:',data);
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      },
    });
  }
}
