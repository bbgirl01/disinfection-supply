import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PutawayStatisticsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-putaway-statistics',
  templateUrl: 'putaway-statistics.html',
})
export class PutawayStatisticsPage {
  machs: number = 0;
  statusZoom: number = 0;
  dayZoom: number = 0;
  public list: Array<any> = [{ name: '插值针', id: '19484743484', sum: '99', finish: '3', time: '12:33:02', status: 0 },
  { name: '小针头', id: '22443743484', sum: '199', finish: '13', time: '12:09:09', status: 0 },
  { name: '巴蜀', id: '9084743484', sum: '9', finish: '8', time: '12:33:02', status: 1 },
  { name: '投蜜', id: '9048484', sum: '39', finish: '1', time: '10:53:12', status: 1 },
  { name: '云盘', id: '89344009', sum: '3', finish: '3', time: '01:43:22', status: 0 },
  { name: '针线', id: '98744244', sum: '12', finish: '0', time: '02:13:03', status: 0 }]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goAhead(index) {
    let sta = this.list[index]['status'];
    this.navCtrl.push(sta == 0 ? this.washingPassPage : this.washingNopassPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PutawayStatisticsPage');
  }

}
