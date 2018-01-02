import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CustomHeaderComponent } from './custom-header/custom-header';
import { LoginInfoComponent } from './login-info/login-info';
import { IndexListComponent } from './index-list/index-list';
@NgModule({
  declarations: [
    CustomHeaderComponent,
    LoginInfoComponent,
    IndexListComponent
  ],
  imports: [IonicModule.forRoot(CustomHeaderComponent)
  ],
  exports: [
    CustomHeaderComponent,
    LoginInfoComponent,
    IndexListComponent
  ]
})
export class ComponentsModule { }
