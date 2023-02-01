import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { RouterModule } from '@angular/router';
import { MessageComponent } from './messages/message/message.component';
import { MessageModule } from './messages/message/message.module';
import { UserModule } from './user/user.module';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { StarComponent } from './shared/star/star.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MessageModule,
    UserModule,
    RouterModule.forRoot([
      {path:'welcome', component:WelcomeComponent},
      {path:'',redirectTo:'welcome',pathMatch:'full'},
      {path:'**',component:PageNotFoundComponent}
    ]),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
