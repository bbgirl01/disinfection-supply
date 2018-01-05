import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GrantIndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-grant-index',
  templateUrl: 'grant-index.html',
})
export class GrantIndexPage {
  tabs: Array<any> = ['申领', '直接', '统计'];
  tabIndex: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GrantIndexPage');
  }

  tabChange(index) {
    this.tabIndex = index;
  }
}
