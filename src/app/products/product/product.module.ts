import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductEditComponent } from '../product-edit/product-edit.component';
import { ProductListComponent } from '../product-list/product-list.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ProductModule { }
