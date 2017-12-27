import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CustomHeaderComponent } from './custom-header/custom-header';
import { LoginInfoComponent } from './login-info/login-info';
@NgModule({
  declarations: [
    CustomHeaderComponent,
    LoginInfoComponent
  ],
  imports: [IonicModule.forRoot(CustomHeaderComponent)
  ],
  exports: [
    CustomHeaderComponent,
    LoginInfoComponent
  ]
})
export class ComponentsModule { }
