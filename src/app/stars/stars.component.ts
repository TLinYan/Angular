import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  // 装饰器接收数据
  @Input()
  private rating:number = 0;

  // 星级数组
  private stars:boolean[]; 

  constructor() { }

  ngOnInit() {
    this.stars = [];
    for(let i = 1; i < 6; i++){
      this.stars.push(i > this.rating);
    }
  }

}
