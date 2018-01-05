import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner'

import { MyApp } from './app.component';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';
import { HomePage } from '../pages/home/home';
import { RecycleIndexPage } from '../pages/recycle/recycle-index/recycle-index';
import { RecycleListPage } from '../pages/recycle/recycle-list/recycle-list';
import { TodayRecyclePage } from '../pages/recycle/today-recycle/today-recycle';
import { PackageDetailPage } from '../pages/package-detail';
import { RecycleStatisticsPage } from '../pages/recycle/recycle-statistics/recycle-statistics';
import { RecyclePopupPage } from '../pages/recycle/recycle-popup';
import { LoginPage } from '../pages/login/login';
import { SortingScanPage } from '../pages/sorting/sorting-scan/sorting-scan';
import { SortingListPage } from '../pages/sorting/sorting-list';
import { SortingDetailPage } from '../pages/sorting/sorting-detail';

import { WashingFreePage } from '../pages/washing/washing-free';
import { WashingListPage } from '../pages/washing/washing-list';
import { WashingDetailListPage } from '../pages/washing/washing-detail-list';
import { WashingLinePage } from '../pages/washing/washing-line';
import { WashingHomePage } from '../pages/washing/washing-home';
import { WashingCollectPage } from '../pages/washing/washing-collect';
import { WashingCheckPage } from '../pages/washing/washing-check';
import { WashingQualityPage } from '../pages/washing/washing-quality';
import { WashingPassPage } from '../pages/washing/washing-pass';
import { WashingNopassPage } from '../pages/washing/washing-nopass';
import { WashingStatisticsPage } from '../pages/washing/washing-statistics';

import { PackIndexPage } from '../pages/pack/pack-index';
import { PackListPage } from '../pages/pack/pack-list';
import { PackStatisticsPage } from '../pages/pack/pack-statistics';

import { PutawayHomePage } from '../pages/putaway/putaway-home';
import { PutawayUpPage } from '../pages/putaway/putaway-up';
import { PutawayChangePage } from '../pages/putaway/putaway-change';
import { PutawayStatisticsPage } from '../pages/putaway/putaway-statistics';

import { GrantIndexPage } from '../pages/grant/grant-index';
import { GrantApplyPage } from '../pages/grant/grant-apply';
import { GrantApplyDepartmentPage } from '../pages/grant/grant-apply-department';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RecycleIndexPage,
    RecycleListPage,
    TodayRecyclePage,
    PackageDetailPage,
    RecycleStatisticsPage,
    RecyclePopupPage,
    LoginPage,
    SortingScanPage,
    SortingListPage,
    SortingDetailPage,
    WashingFreePage,
    WashingListPage,
    PackIndexPage,
    PackListPage,
    PackStatisticsPage,
    WashingDetailListPage,
    WashingLinePage,
    WashingHomePage,
    WashingCollectPage,
    WashingCheckPage,
    WashingQualityPage,
    WashingPassPage,
    WashingNopassPage,
    WashingStatisticsPage,
    PutawayHomePage,
    PutawayUpPage,
    PutawayChangePage,
    PutawayStatisticsPage,
    GrantIndexPage,
    GrantApplyPage,
    GrantApplyDepartmentPage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    PipesModule,
    ChartsModule,
    IonicModule.forRoot(MyApp),
    NgxQRCodeModule

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
    RecyclePopupPage,
    LoginPage,
    SortingScanPage,
    SortingListPage,
    SortingDetailPage,
    WashingFreePage,
    WashingListPage,
    PackIndexPage,
    PackListPage,
    PackStatisticsPage,
    WashingDetailListPage,
    WashingLinePage,
    WashingHomePage,
    WashingCollectPage,
    WashingCheckPage,
    WashingQualityPage,
    WashingPassPage,
    WashingNopassPage,
    WashingStatisticsPage,
    PutawayHomePage,
    PutawayUpPage,
    PutawayChangePage,
    PutawayStatisticsPage,
    GrantIndexPage,
    GrantApplyPage,
    GrantApplyDepartmentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
