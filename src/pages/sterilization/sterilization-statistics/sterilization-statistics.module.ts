import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SterilizationStatisticsPage } from './sterilization-statistics';

@NgModule({
  declarations: [
    SterilizationStatisticsPage,
  ],
  imports: [
    IonicPageModule.forChild(SterilizationStatisticsPage),
  ],
})
export class SterilizationStatisticsPageModule {}
