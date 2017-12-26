import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';
import { ComponentsModule } from '../components/components.module';
import { HomePage } from '../pages/home/home';
import { RecyclePage } from '../pages/recycle/recycle';
import { LoginPage } from '../pages/login/login';
import { SortingScanPage } from '../pages/sorting/sorting-scan/sorting-scan';
import { SortingListPage } from '../pages/sorting/sorting-list';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RecyclePage,
    LoginPage,
    SortingScanPage,
    SortingListPage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RecyclePage,
    LoginPage,
    SortingScanPage,
    SortingListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
