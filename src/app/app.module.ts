import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';
import { ComponentsModule } from '../components/components.module';
import { HomePage } from '../pages/home/home';
import { RecycleIndexPage } from '../pages/recycle/recycle-index/recycle-index';
import { RecycleListPage } from '../pages/recycle/recycle-list/recycle-list';
import { TodayRecyclePage } from '../pages/recycle/today-recycle/today-recycle';
import { PackageDetailPage } from '../pages/recycle/package-detail/package-detail';
import { RecycleStatisticsPage } from '../pages/recycle/recycle-statistics/recycle-statistics';
import { LoginPage } from '../pages/login/login';
import { SortingScanPage } from '../pages/sorting/sorting-scan/sorting-scan';
import { SortingListPage } from '../pages/sorting/sorting-list';
import { SortingDetailPage } from '../pages/sorting/sorting-detail';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RecycleIndexPage,
    RecycleListPage,
    TodayRecyclePage,
    PackageDetailPage,
    RecycleStatisticsPage,
    LoginPage,
    SortingScanPage,
    SortingListPage,
    SortingDetailPage
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
    RecycleIndexPage,
    RecycleListPage,
    TodayRecyclePage,
    PackageDetailPage,
    RecycleStatisticsPage,
    LoginPage,
    SortingScanPage,
    SortingListPage,
    SortingDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
