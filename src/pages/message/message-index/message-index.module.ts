import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessageIndexPage } from './message-index';

@NgModule({
  declarations: [
    MessageIndexPage,
  ],
  imports: [
    IonicPageModule.forChild(MessageIndexPage),
  ],
})
export class MessageIndexPageModule {}
