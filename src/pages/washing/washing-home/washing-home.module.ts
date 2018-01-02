import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WashingHomePage } from './washing-home';

@NgModule({
  declarations: [
    WashingHomePage,
  ],
  imports: [
    IonicPageModule.forChild(WashingHomePage),
  ],
})
export class WashingHomePageModule {}
