import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PackageDetailPage } from './package-detail';

@NgModule({
  declarations: [
    PackageDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PackageDetailPage),
  ],
})
export class PackageDetailPageModule {}
