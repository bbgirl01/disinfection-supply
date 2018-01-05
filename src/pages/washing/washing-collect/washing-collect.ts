import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WashingFreePage } from '../washing-free';
import { WashingLinePage } from '../washing-line';
import { WashingCheckPage } from '../washing-check';

/**
 * Generated class for the WashingCollectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-washing-collect',
  templateUrl: 'washing-collect.html',
})
export class WashingCollectPage {
  washingFreePage: any;
  washingLinePage: any;
  washingCheckPage: any;
  list: Array<any> = [{ name: '减压沸腾清洗机', dayTime: '3', sum: '34', status: 0, opt: '李峰' },
  { name: '手工清洗2', dayTime: '3', sum: '34', status: 1, time: '33:22', opt: '李艳艳' },
  { name: '全自动清洗', dayTime: '3', sum: '34', status: 2, opt: '何慧慧' },
  { name: '全自动清洗2', dayTime: '3', sum: '14', status: 3, time: '12:32:22-13:24:00', opt: '金瑞瑞' }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.washingFreePage = WashingFreePage
    this.washingLinePage = WashingLinePage
    this.washingCheckPage = WashingCheckPage
  }

  changePage(index) {
    switch (index) {
      case 0: this.navCtrl.push(this.washingFreePage);
        break;
      case 1: this.navCtrl.push(this.washingLinePage);
        break;
      case 2: this.navCtrl.push(this.washingCheckPage);
        break;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WashingCollectPage');
  }

}
