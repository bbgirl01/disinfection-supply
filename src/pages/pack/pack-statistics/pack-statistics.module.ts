import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PackStatisticsPage } from './pack-statistics';

@NgModule({
  declarations: [
    PackStatisticsPage,
  ],
  imports: [
    IonicPageModule.forChild(PackStatisticsPage),
  ],
})
export class PackStatisticsPageModule {}
