import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReceiveIndexPage } from './receive-index';

@NgModule({
  declarations: [
    ReceiveIndexPage,
  ],
  imports: [
    IonicPageModule.forChild(ReceiveIndexPage),
  ],
})
export class ReceiveIndexPageModule {}
