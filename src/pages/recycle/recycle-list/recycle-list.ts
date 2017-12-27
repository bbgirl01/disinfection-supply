import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../../login/login';

@IonicPage()
@Component({
  selector: 'page-recycle-list',
  templateUrl: 'recycle-list.html',
})
export class RecycleListPage {
  loginPage: Object;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.loginPage = LoginPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecycleListPage');
  }

}
