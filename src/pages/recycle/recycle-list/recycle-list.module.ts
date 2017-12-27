import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecycleListPage } from './recycle-list';

@NgModule({
  declarations: [
    RecycleListPage,
  ],
  imports: [
    IonicPageModule.forChild(RecycleListPage),
  ],
})
export class RecycleListPageModule {}
