import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PackageDetailPage } from '../../package-detail/package-detail';

/**
 * Generated class for the UseListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-use-list',
  templateUrl: 'use-list.html',
})
export class UseListPage {
  packageDetailPage: any;
  scanStep: Number = 1; // 1,扫描病人条码 2,扫描包条码
  showPage: Boolean = false;
  modalShow: Boolean = false;
  // @Output() hideModal = new EventEmitter<any>();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.packageDetailPage = PackageDetailPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UseListPage');

  }

  showIndexPage() {
    this.showPage = true;
  }

  changeScanStep() {
    this.scanStep = 2;
  }

  showModal() {
    this.modalShow = true;
  }
  hideModal() {
    this.modalShow = false;
  }
}
