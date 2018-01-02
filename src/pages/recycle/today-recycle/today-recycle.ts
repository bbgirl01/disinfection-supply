import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PackageDetailPage } from '../../package-detail';

@IonicPage()
@Component({
  selector: 'page-today-recycle',
  templateUrl: 'today-recycle.html',
})
export class TodayRecyclePage {
  tabs: Object = ['今日回收(3)'];
  packageDetailPage: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.packageDetailPage = PackageDetailPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodayRecyclePage');
  }

  tabChange(index) {
    // console.log(index);
    // this.tabIndex = index;
  }
}
