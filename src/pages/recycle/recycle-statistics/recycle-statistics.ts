import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../../login/login';

@IonicPage()
@Component({
  selector: 'page-recycle-statistics',
  templateUrl: 'recycle-statistics.html',
})
export class RecycleStatisticsPage {
  loginPage: Object;
  tabs: Object = ['回收', '统计'];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.loginPage = LoginPage;
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad RecyclePage');
  }

  tabChange(index) {
    console.log(index);
  }

}
