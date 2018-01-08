import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SterilizationHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sterilization-home',
  templateUrl: 'sterilization-home.html',
})
export class SterilizationHomePage {
  tabs: Array<any> = ['灭菌', '统计'];
  choosePage: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  tabChange(e) {
    this.choosePage = e;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SterilizationHomePage');
  }

}
