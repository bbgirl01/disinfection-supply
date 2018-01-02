import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PackListPage } from './pack-list';

@NgModule({
  declarations: [
    PackListPage,
  ],
  imports: [
    IonicPageModule.forChild(PackListPage),
  ],
})
export class PackListPageModule {}
