import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-today-recycle',
  templateUrl: 'today-recycle.html',
})
export class TodayRecyclePage {
  tabs: Object = ['今日回收(3)'];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodayRecyclePage');
  }

  tabChange(index) {
    // console.log(index);
    // this.tabIndex = index;
  }
}
