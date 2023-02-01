import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {},
    {path:'',redirectTo:'welcome',pathMatch:'full'},
    {path:'***',component:PageNotFoundComponent}
  ])
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
