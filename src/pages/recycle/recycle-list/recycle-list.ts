import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TodayRecyclePage } from '../today-recycle/today-recycle';
import { PackageDetailPage } from '../package-detail/package-detail';

@IonicPage()
@Component({
  selector: 'page-recycle-list',
  templateUrl: 'recycle-list.html',
})
export class RecycleListPage {
  todayRecyclePage: Object;
  packageDetailPage: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.todayRecyclePage = TodayRecyclePage;
    this.packageDetailPage = PackageDetailPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecycleListPage');
  }

}
