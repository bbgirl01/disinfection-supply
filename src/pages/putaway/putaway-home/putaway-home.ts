import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PutawayHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-putaway-home',
  templateUrl: 'putaway-home.html',
})
export class PutawayHomePage {

  tabs: Array<any> = ['上架', '换架', '统计'];
  tabsIndex: number = 0;
  info: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  getScanInfo(event) {
    console.log(event);
    this.info = 0;
    this.tabsIndex = 1;
  }

  tabChange(index) {
    this.tabsIndex = index;
    this.info = 1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PutawayHomePage');
  }

}
