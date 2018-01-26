import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  tabs: Object = ['清洗', '清洗质检', '统计'];
  loginType: Number = 0; // 默认扫码登录
  popShow: Boolean = false;
  homePage: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.homePage = HomePage;
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LoginPage');
  }

  tabChange(index) {
    console.log(index);
  }

  changeLoginWay(type) {
    this.loginType = type;
  }

  showPopup() {
    this.popShow = true;
  }
  hidePopup() {
    this.popShow = false;
  }
}
