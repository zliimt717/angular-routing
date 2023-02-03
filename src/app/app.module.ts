import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { RouterModule } from '@angular/router';
import { MessageModule } from './messages/message/message.module';
import { UserModule } from './user/user.module';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './products/product-data';
import { ProductModule } from './products/product/product.module';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MessageModule,
    UserModule,
    ProductModule,
    RouterModule.forRoot([
      {path:'welcome', component:WelcomeComponent},
      {path:'',redirectTo:'welcome',pathMatch:'full'},
      {path:'**',component:PageNotFoundComponent}
    ]),
    InMemoryWebApiModule.forRoot(ProductData,{delay:1000})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
