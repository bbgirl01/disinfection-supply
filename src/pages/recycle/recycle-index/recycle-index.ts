import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../../login/login';

@IonicPage()
@Component({
  selector: 'page-recycle-index',
  templateUrl: 'recycle-index.html',
})
export class RecycleIndexPage {
  loginPage: Object;
  tabs: Object = ['回收', '统计'];
  tabIndex: Number = 0;
  showPage: Boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.loginPage = LoginPage;
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad RecyclePage');
  }

  tabChange(index) {
    console.log(index);
    this.tabIndex = index;
  }

  showIndexPage() {
    this.showPage = true;
  }
}
