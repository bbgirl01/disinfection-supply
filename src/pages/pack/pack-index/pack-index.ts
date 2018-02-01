import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PackIndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pack-index',
  templateUrl: 'pack-index.html',
})
export class PackIndexPage {
  tabs: Object = ['打包/复核', '统计'];
  tabIndex: Number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PackIndexPage');
  }

  tabChange(index) {
    console.log(index);
    this.tabIndex = index;
  }

}
