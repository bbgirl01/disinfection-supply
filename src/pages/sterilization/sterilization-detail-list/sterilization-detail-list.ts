import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SterilizationDetailListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sterilization-detail-list',
  templateUrl: 'sterilization-detail-list.html',
})
export class SterilizationDetailListPage {
  list: Array<any> = [{ name: '车指针', id: '1948575564', sum: '22' },
  { name: '小转盘', id: '7868575564', sum: '112' },
  { name: '铜轴', id: '2448575564', sum: '2' },
  { name: '区段制作', id: '44225564', sum: '72' },
  { name: '车指针2', id: '1948575564', sum: '9' },
  { name: '器械包', id: '3348575564', sum: '212' },
  { name: '车盘', id: '348575564', sum: '122' },
  { name: '箭头', id: '248575564', sum: '92' },
  { name: '铜臭', id: '908575564', sum: '221' }];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SterilizationDetailListPage');
  }

}
