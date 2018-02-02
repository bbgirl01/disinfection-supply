import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { PackageDetailPage } from '../../package-detail';

@IonicPage()
@Component({
  selector: 'page-receive-list',
  templateUrl: 'receive-list.html',
})
export class ReceiveListPage {
  packageDetailPage: any;
  popupShow: Boolean = false;
  unqualifiedCauses: Array<any> = ['脏包', '湿包', '破损'];
  unqualifiedCausesIndex: Number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
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

  presentToast() {
    let toast = this.toastCtrl.create({
      message: '接收成功！',
      duration: 1000,
      position: 'middle',
      cssClass: 'custom-toast'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  changeUnqualifiedCause(index) {
    this.unqualifiedCausesIndex = index;
  }
}
