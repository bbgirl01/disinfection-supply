import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-receive-index',
  templateUrl: 'receive-index.html',
})
export class ReceiveIndexPage {
  tabs: Array<any> = ['接收', '统计'];
  tabIndex: Number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReceiveIndexPage');
  }

  tabChange(index) {
    this.tabIndex = index;
  }
}
