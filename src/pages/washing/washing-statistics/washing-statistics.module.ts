import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WashingStatisticsPage } from './washing-statistics';

@NgModule({
  declarations: [
    WashingStatisticsPage,
  ],
  imports: [
    IonicPageModule.forChild(WashingStatisticsPage),
  ],
})
export class WashingStatisticsPageModule {}
