import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  pageTitle='Product Detail';
  product!: Product;
  errorMessage!: string;

  constructor(private productService:ProductService){}

  getProduct(id:number){
    this.productService.getPorduct(id).subscribe({
      next:product=>this.onProductRetrieved(product),
      error:err=>this.errorMessage=err
    });
  }

  onProductRetrieved(product:Product):void{
    this.product=product;

    if(this.product){
      this.pageTitle=`Product Detail:${this.product.productName}`;
    }else{
      this.pageTitle='No product found';
    }
  }

}
