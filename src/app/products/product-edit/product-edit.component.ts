import { Component } from '@angular/core';
import { MessageService } from 'src/app/messages/message.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {

  pageTitle='Product Edit';
  errorMessage!: string;
  
  product!: Product;
  
  constructor(private productService:ProductService,
              private messageService:MessageService){}

  getProduct(id:number):void{
    this.productService.getPorduct(id).subscribe(
      {
        next:product=>this.onProductRetrieved(product),
        error:err=>this.errorMessage=err
      }
    );
  }

  onProductRetrieved(product:Product):void{
    this.product=product;

    if(!this.product){
      this.pageTitle='No product found';
    }else{
      if(this.product.id===0){
        this.pageTitle='Add Product';
      }else{
        this.pageTitle=`Edit Product:${this.product.productName}`;
      }
    }
  }

  deleteProduct():void{
    if(this.product.id===0){
      //Don't delete, it was never saved.
      this.onSaveComplete(`${this.product.productName} was deleted`);
    }else{
      if(confirm(`Really delete the product: ${this.product.productName}?`)){
        this.productService.deleteProduct(this.product.id).subscribe(
          {
            next:()=>this.onSaveComplete(`${this.product.productName} was delete`),
            error:err=>this.errorMessage=err
          }
        );
      }
    }
  }

  onSaveComplete(message?:string):void{
    if(message){
      this.messageService.addMessage(message)
    }
  }

  saveProduct():void{
    if(true===true){
      if(this.product.id===0){
        this.productService.createProduct(this.product).subscribe(
          {
            next:()=>this.onSaveComplete(`The new ${this.product.productName} was saved`),
            error:err=>this.errorMessage=err
          }
        );
      }else{
        this.errorMessage='Please correct the validation errors.';
      }
    }
  }


}
