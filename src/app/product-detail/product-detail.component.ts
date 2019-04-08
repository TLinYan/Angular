import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, Comment, ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  comments: Comment[];

  // 注入保存当前路由信息对象
  constructor(
    private routeInit: ActivatedRoute,  //注入路由
    private productService: ProductService  //注入服务
  ) { }

  ngOnInit() {
    // 数据从依赖(服务)中取得
    let productId: number = this.routeInit.snapshot.params['productId'];  //创建一个临时变量保存id
    this.product = this.productService.getProduct(productId);   //取商品
    this.comments = this.productService.getCommentForId(productId);   //取评论
  }

}
