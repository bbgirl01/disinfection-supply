import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReceiveStatisticsPage } from './receive-statistics';

@NgModule({
  declarations: [
    ReceiveStatisticsPage,
  ],
  imports: [
    IonicPageModule.forChild(ReceiveStatisticsPage),
  ],
})
export class ReceiveStatisticsPageModule {}
