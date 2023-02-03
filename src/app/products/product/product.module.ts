import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductListComponent } from '../product-list/product-list.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ProductModule { }
