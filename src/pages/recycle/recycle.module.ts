import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecyclePage } from './recycle';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    RecyclePage,
  ],
  imports: [
    IonicPageModule.forChild(RecyclePage),
    ComponentsModule
  ],
})
export class RecyclePageModule {}
