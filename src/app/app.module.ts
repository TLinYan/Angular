import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from "@angular/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from './shared/product.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
    HomeComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,  //浏览器
    HttpModule,     //通讯
    AppRoutingModule  //路由
  ],
  providers: [ProductService],  //注册服务(依赖)
  bootstrap: [AppComponent]
})
export class AppModule { }
