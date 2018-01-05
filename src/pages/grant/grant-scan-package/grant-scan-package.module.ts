import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GrantScanPackagePage } from './grant-scan-package';

@NgModule({
  declarations: [
    GrantScanPackagePage,
  ],
  imports: [
    IonicPageModule.forChild(GrantScanPackagePage),
  ],
})
export class GrantScanPackagePageModule {}
