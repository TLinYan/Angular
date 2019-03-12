import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  // 私有属性 -品名+说明
  private proTitle: string;
  private proDesc: string;

  // 注入保存当前路由信息对象
  constructor(private routeInit: ActivatedRoute) { }

  ngOnInit() {
    // 赋值
    this.proTitle = this.routeInit.snapshot.params['tit'];
    this.proDesc = this.routeInit.snapshot.params['desc'];
  }

}
