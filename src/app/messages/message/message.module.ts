import { NgModule } from '@angular/core';
import { MessageComponent } from './message.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';



@NgModule({
  declarations: [
    MessageComponent
  ],
  imports: [
    SharedModule
  ]
})
export class MessageModule { }
