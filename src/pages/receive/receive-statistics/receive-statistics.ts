import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PackageDetailPage } from '../../package-detail';

@IonicPage()
@Component({
  selector: 'page-receive-statistics',
  templateUrl: 'receive-statistics.html',
})
export class ReceiveStatisticsPage {
  packageDetailPage: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.packageDetailPage = PackageDetailPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReceiveStatisticsPage');
  }

}
