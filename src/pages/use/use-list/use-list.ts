import { Component, Output, EventEmitter } from '@angular/core';
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
  modalShow: Boolean = false;
  @Output() showModal = new EventEmitter<any>();
  // @Output() hideModal = new EventEmitter<any>();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.packageDetailPage = PackageDetailPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UseListPage');

  }

  showModalFn() {
    this.showModal.emit();
  }
  // hideModalFn() {
  //   this.hideModal.emit();
  // }
}
