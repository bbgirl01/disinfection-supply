import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SortingDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sorting-detail',
  templateUrl: 'sorting-detail.html',
})
export class SortingDetailPage {
  list: Array<any> = [{ name: '小拉钩', number: 2 }, { name: '舒驰建', number: 1 }, { name: '折线剪', number: 3 }, { name: '小兰狗', number: 18 }]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  reduceNumber(index) {
    let tmp = this.list[index]['number'] - 1;
    if (tmp < 0) {
      tmp = 0;
    }
    this.list[index]['number'] = tmp;

  }

  addNumber(index) {
    this.list[index]['number'] += 1;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SortingDetailPage');
  }

}
