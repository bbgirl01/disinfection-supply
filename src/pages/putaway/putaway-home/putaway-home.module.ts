import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PutawayHomePage } from './putaway-home';

@NgModule({
  declarations: [
    PutawayHomePage,
  ],
  imports: [
    IonicPageModule.forChild(PutawayHomePage),
  ],
})
export class PutawayHomePageModule {}
