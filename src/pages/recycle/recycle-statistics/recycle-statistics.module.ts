import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecycleStatisticsPage } from './recycle-statistics';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    // RecycleStatisticsPage,
  ],
  imports: [
    IonicPageModule.forChild(RecycleStatisticsPage),
    ComponentsModule
  ],
})
export class RecycleStatisticsPageModule { }
