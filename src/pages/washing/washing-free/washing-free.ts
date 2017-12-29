import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WashingListPage } from '../washing-list';
/**
 * Generated class for the WashingFreePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-washing-free',
  templateUrl: 'washing-free.html',
})
export class WashingFreePage {

  times: number = 0;
  dayTime: string = '2017-09-01 12:11:10';
  washingListPage: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.washingListPage = WashingListPage
  }

  addTimes() {
    this.times += 1;
  }

  chooseTime(index, el, sum) {
    let tmp = '';
    for (let i = 0; i < el.path.length; i++) {

      if (("" + el.path[i]['className']).indexOf('run-zoom') != -1) {
        tmp = el.path[i]
      }
    }
    for (let i = 0; i < sum.children.length; i++) {
      sum.children[i].className = 'run-zoom'
    }
    tmp['className'] = 'run-zoom tapped-zoom'
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad WashingFreePage');
  }

}
