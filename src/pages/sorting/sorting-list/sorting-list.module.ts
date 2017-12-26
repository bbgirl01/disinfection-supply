import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SortingListPage } from './sorting-list';

@NgModule({
  declarations: [
    SortingListPage,
  ],
  imports: [
    IonicPageModule.forChild(SortingListPage),
  ],
})
export class SortingListPageModule {}
