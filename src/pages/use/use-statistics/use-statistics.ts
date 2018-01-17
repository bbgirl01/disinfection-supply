import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PackageDetailPage } from '../../package-detail/package-detail';

/**
 * Generated class for the UseStatisticsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-use-statistics',
  templateUrl: 'use-statistics.html',
})
export class UseStatisticsPage {
  packageDetailPage: any;
  popupShow: Boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.packageDetailPage = PackageDetailPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UseStatisticsPage');
  }

  showSearchPopup() {
    this.popupShow = true;
  }
  hideSearchPopup() {
    this.popupShow = false;
  }
}
