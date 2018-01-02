import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WashingHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-washing-home',
  templateUrl: 'washing-home.html',
})
export class WashingHomePage {
  tabs: Array<any> = ['清洗', '清洗质检', '统计'];
  choosePage: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  tabChange(e) {
    this.choosePage = e;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad WashingHomePage');
  }

}
