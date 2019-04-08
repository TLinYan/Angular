import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // 商品数组
  private products: Product[];
  // 图片链接
  private imgUrl = 'http://placehold.it/243x150';

  constructor(private productServe: ProductService) { }

  ngOnInit() {
    this.products = this.productServe.getProducts();
  }

}
