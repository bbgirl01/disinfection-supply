import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GrantDirectPage } from './grant-direct';

@NgModule({
  declarations: [
    GrantDirectPage,
  ],
  imports: [
    IonicPageModule.forChild(GrantDirectPage),
  ],
})
export class GrantDirectPageModule {}
