import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component'

// 定义路由
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'productDetail/:productId', component: ProductDetailComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }  //路由重定向
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }