import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WashingFreePage } from '../washing-free';
import { WashingLinePage } from '../washing-line';
import { WashingCheckPage } from '../washing-check';
import { WashingPassPage } from '../washing-pass';
import { WashingNopassPage } from "../washing-nopass";
/**
 * Generated class for the WashingQualityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-washing-quality',
  templateUrl: 'washing-quality.html',
})
export class WashingQualityPage {
  washingFreePage: any;
  washingLinePage: any;
  washingCheckPage: any;
  washingPassPage: any;
  washingNopassPage: any;
  dayZoom: number = 0;
  statusZoom: number = 0;
  list: Array<any> = [{ name: '减压沸腾清洗机', finish: '3', sum: '34', status: 0, time: '12:01:00', opt: '妃子' },
  { name: '手工清洗2', finish: '3', sum: '34', status: 0, time: '8:33:22', opt: '妃子' },
  { name: '全自动清洗', finish: '3', sum: '34', status: 1, time: '09:03:12', opt: '妃子' },
  { name: '全自动清洗2', finish: '3', sum: '14', status: 2, time: '12:32:22', opt: '妃子' }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.washingFreePage = WashingFreePage
    this.washingLinePage = WashingLinePage
    this.washingCheckPage = WashingCheckPage
    this.washingPassPage = WashingPassPage
    this.washingNopassPage = WashingNopassPage
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WashingQualityPage');
  }

  changePage(index) {
    let idx = this.list[index]['status'];
    switch (idx) {
      case 0:
        this.navCtrl.push(this.washingCheckPage);
        break;
      case 1:
        this.navCtrl.push(this.washingNopassPage);
        break;
      case 2:
        this.navCtrl.push(this.washingPassPage);
        break;
    }
  }

}
