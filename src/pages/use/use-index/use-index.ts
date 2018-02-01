import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UseIndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-use-index',
  templateUrl: 'use-index.html',
})
export class UseIndexPage {
  tabs: Object = ['使用', '统计'];
  tabIndex: Number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UseIndexPage');
  }

  tabChange(index) {
    this.tabIndex = index;
  }


}
