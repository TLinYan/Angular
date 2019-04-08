import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // 商品信息
  private products: Product[] = [
    new Product(10001, "大苹果", 14.5, 4.3, "这是我最爱吃的烟台大苹果", ["水果"]),
    new Product(10002, "深海带鱼", 35.9, 2.3, "俄罗斯深海大带", ["水产"]),
    new Product(10003, "阿根廷牛肉", 45.3, 5, "进口阿根廷野生牛肉", ["肉食"]),
    new Product(10004, "iphoneXS", 8999, 4.8, "第一批上市苹果手机，你值得拥有", ["电子产品"]),
    new Product(10005, "福临门花生油", 59.9, 3.5, "福临门5S压榨一级花生油", ["粮油"]),
    new Product(10006, "ThinkPad X1", 6999, 4.5, "联想家族高端笔记本", ["电子产品"])
  ];

  // 品类信息
  private comments: Comment[] = [
    new Comment(1, 10001, "2019-3-20 09:00:00", "张三", 3, "东西不错"),
    new Comment(2, 10002, "2019-4-20 10:00:00", "李四", 2, "东西很不错"),
    new Comment(3, 10003, "2019-5-20 11:00:00", "王五", 5, "东西确实不错"),
    new Comment(4, 10002, "2019-6-20 12:00:00", "赵六", 3, "东西相当不错"),
    new Comment(5, 10001, "2019-7-20 13:00:00", "史七", 5, "东西还不错"),
    new Comment(6, 10004, "2019-8-20 14:00:00", "钱八", 4, "东西相比不错"),
    new Comment(7, 10004, "2019-9-20 14:00:00", "刘九", 3, "东西还算不错"),
    new Comment(8, 10005, "2019-10-20 14:00:00", "魏十", 4, "东西也还不错"),
    new Comment(9, 10005, "2019-11-20 14:00:00", "孙零", 2.5, "东西还可以"),
    new Comment(10, 10006, "2019-12-20 14:00:00", "郑一", 5, "东西中等吧"),
    new Comment(11, 10006, "2019-1-20 14:00:00", "杨二", 4, "东西也还行吧")
  ]

  constructor() { };

  // 获取数据
  getProducts(): Product[] {
    return this.products;
  };

  // 根据id在数组里查找信息并返回
  getProduct(id: number): Product {
    return this.products.find((product) => product.id == id);
  }

  // 根据id获取对应品类信息
  getCommentForId(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId == id)
  }

}

// 商品类
export class Product {
  // 定义一个构造函数
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) { }
}

// 品类
export class Comment {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string
  ) { }
}