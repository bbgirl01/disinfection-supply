import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecyclePage } from './recycle';

@NgModule({
  declarations: [
    RecyclePage,
  ],
  imports: [
    IonicPageModule.forChild(RecyclePage),
  ],
})
export class RecyclePageModule {}
