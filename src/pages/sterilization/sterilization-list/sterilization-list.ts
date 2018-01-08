import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SterilizationFreePage } from "../sterilization-free";
import { SterilizationLinePage } from "../sterilization-line";
import { SterilizationCheckPage } from "../sterilization-check";
/**
 * Generated class for the SterilizationListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sterilization-list',
  templateUrl: 'sterilization-list.html',
})
export class SterilizationListPage {
  sterilizationFreePage: any;
  sterilizationCheckPage: any;
  sterilizationLinePage: any;
  list: Array<any> = [{ name: '减压沸腾清洗机', dayTime: '3', sum: '34', status: 0, opt: '李峰' },
  { name: '手工清洗2', dayTime: '3', sum: '34', status: 1, time: '33:22', opt: '李艳艳' },
  { name: '全自动清洗', dayTime: '3', sum: '34', status: 2, opt: '何慧慧' },
  { name: '全自动清洗2', dayTime: '3', sum: '14', status: 3, time: '12:32:22-13:24:00', opt: '金瑞瑞' }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sterilizationFreePage = SterilizationFreePage
    this.sterilizationLinePage = SterilizationLinePage
    this.sterilizationCheckPage = SterilizationCheckPage
  }

  changePage(index) {
    switch (index) {
      case 0: this.navCtrl.push(this.sterilizationFreePage);
        break;
      case 1: this.navCtrl.push(this.sterilizationLinePage);
        break;
      case 2: this.navCtrl.push(this.sterilizationCheckPage);
        break;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SterilizationListPage');
  }

}
