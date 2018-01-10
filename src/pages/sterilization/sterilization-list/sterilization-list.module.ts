import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SterilizationListPage } from './sterilization-list';

@NgModule({
  declarations: [
    SterilizationListPage,
  ],
  imports: [
    IonicPageModule.forChild(SterilizationListPage),
  ],
})
export class SterilizationListPageModule {}
