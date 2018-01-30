import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CustomHeaderComponent } from './custom-header/custom-header';
import { LoginInfoComponent } from './login-info/login-info';
import { IndexListComponent } from './index-list/index-list';
import { SegmentComponent } from './segment/segment';
import { ScanComponent } from './scan/scan';
@NgModule({
  declarations: [
    CustomHeaderComponent,
    LoginInfoComponent,
    IndexListComponent,
    SegmentComponent,
    ScanComponent
  ],
  imports: [IonicModule.forRoot(CustomHeaderComponent)
  ],
  exports: [
    CustomHeaderComponent,
    LoginInfoComponent,
    IndexListComponent,
    SegmentComponent,
    ScanComponent
  ]
})
export class ComponentsModule { }
