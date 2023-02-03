import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      {
        next:products=>{
          this.products=products;
          this.filteredProducts=this.performFilter(this.listFilter);
        },
        error:err=>this.errorMessage=err
      }
    );

  }

  constructor(private productService: ProductService){}

  pageTitle = "Product List";
  imageWidth=50;
  imageMargin=2;
  showImage=false;
  errorMessage='';
  
  _listFilter='';

  filteredProducts:Product[]=[];
  products:Product[]=[];

  get listFilter():string{
    return this._listFilter;
  }

  set listFilter(value:string){
    this._listFilter=value;
    this.filteredProducts=this.listFilter?this.performFilter(this.listFilter):this.products;
  }

  performFilter(filterBy: string): Product[] {
    filterBy=filterBy.toLowerCase();
    return this.products.filter(
      (product:Product)=> product.productName?.toLocaleLowerCase().indexOf(filterBy)!=-1
    );
  }

  toggleImage():void{
    this.showImage=!this.showImage;
  }

}
