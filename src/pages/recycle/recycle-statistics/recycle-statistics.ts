import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PackageDetailPage } from '../../package-detail';

@IonicPage()
@Component({
  selector: 'page-recycle-statistics',
  templateUrl: 'recycle-statistics.html',
})
export class RecycleStatisticsPage {
  packageDetailPage: any;
  tabs: Object = ['回收', '统计'];
  showPopupFlag: any = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.packageDetailPage = PackageDetailPage;
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad RecyclePage');
    
  }

  tabChange(index) {
    console.log(index);
  }

  showPopup() {
    this.showPopupFlag = true;
  }

  hidePop() {
    this.showPopupFlag = false;
  }
}
