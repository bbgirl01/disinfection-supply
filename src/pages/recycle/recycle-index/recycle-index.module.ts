import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecycleIndexPage } from './recycle-index';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    // RecycleIndexPage,
  ],
  imports: [
    IonicPageModule.forChild(RecycleIndexPage),
    ComponentsModule
  ],
})
export class RecycleIndexPageModule { }
