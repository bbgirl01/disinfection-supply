import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CustomHeaderComponent } from './custom-header/custom-header';
@NgModule({
  declarations: [
    CustomHeaderComponent
  ],
  imports: [IonicModule.forRoot(CustomHeaderComponent)
  ],
  exports: [
    CustomHeaderComponent
  ]
})
export class ComponentsModule { }
