import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductEditInfoComponent } from '../product-edit-info/product-edit-info.component';
import { ProductEditTagsComponent } from '../product-edit-tags/product-edit-tags.component';
import { ProductEditComponent } from '../product-edit/product-edit.component';
import { ProductListComponent } from '../product-list/product-list.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    //ProductEditInfoComponent
    //ProductEditTagsComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ProductModule { }
