import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit-tags',
  templateUrl: './product-edit-tags.component.html',
  styles: [
  ]
})
export class ProductEditTagsComponent implements OnInit {
  errorMessage!: string;
  newTags='';
  product={id:1,category:'test', tags:['test']};

  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
  }

  addTags():void{
    if(!this.newTags){
      this.errorMessage='Enter the search keywords sparated by commas and then press Add';
    }else{
      const tagArray=this.newTags.split(',');
      this.product.tags=this.product.tags?this.product.tags.concat(tagArray):tagArray;
      this.newTags='';
      this.errorMessage='';
    }
  }

  // Remove the tag from the array of tags.
  removeTag(idx:number):void{
    this.product.tags.splice(idx,1);
  }

}
