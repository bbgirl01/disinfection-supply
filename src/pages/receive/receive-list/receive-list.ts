import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PackageDetailPage } from '../../package-detail';

@IonicPage()
@Component({
  selector: 'page-receive-list',
  templateUrl: 'receive-list.html',
})
export class ReceiveListPage {
  packageDetailPage: any;
  popupShow: Boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.packageDetailPage = PackageDetailPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReceiveListPage');
  }

  showPopup() {
    this.popupShow = true;
  }
  hidePopup() {
    this.popupShow = false;
  }
}
