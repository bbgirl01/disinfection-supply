import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WashingListPage } from './washing-list';

@NgModule({
  declarations: [
    WashingListPage,
  ],
  imports: [
    IonicPageModule.forChild(WashingListPage),
  ],
})
export class WashingListPageModule {}
