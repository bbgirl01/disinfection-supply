import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReceiveListPage } from './receive-list';

@NgModule({
  declarations: [
    ReceiveListPage,
  ],
  imports: [
    IonicPageModule.forChild(ReceiveListPage),
  ],
})
export class ReceiveListPageModule {}
