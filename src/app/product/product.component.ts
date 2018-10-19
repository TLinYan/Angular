import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // 商品数组
  private products: Array<product>;
  // 图片链接
  private imgUrl='http://placehold.it/243x150';

  constructor() { }

  ngOnInit() {
    this.products = [
      new product(10001,"大苹果",14.5,4.3,"这是我最爱吃的烟台大苹果",["水果"]),
      new product(10002,"深海带鱼",35.9,5,"俄罗斯深海大带",["水产"]),
      new product(10003,"阿根廷牛肉",45.3,5,"进口阿根廷野生牛肉",["肉食"]),
      new product(10004,"iphoneXS",8999,4.8,"第一批上市苹果手机，你值得拥有",["电子产品"]),
      new product(10005,"福临门花生油",59.9,3.5,"福临门5S压榨一级花生油",["粮油"]),
      new product(10006,"ThinkPad X1",6999,4.5,"联想家族高端笔记本",["电子产品"])
    ]
  }

}
// class类
export class product{
  // 定义一个构造函数
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ){}
}