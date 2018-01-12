import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SterilizationHomePage } from './sterilization-home';

@NgModule({
  declarations: [
    SterilizationHomePage,
  ],
  imports: [
    IonicPageModule.forChild(SterilizationHomePage),
  ],
})
export class SterilizationHomePageModule {}
