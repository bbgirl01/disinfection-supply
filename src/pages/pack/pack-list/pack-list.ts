import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { PackageDetailPage } from '../../package-detail';

/**
 * Generated class for the PackListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pack-list',
  templateUrl: 'pack-list.html',
})
export class PackListPage {

  packageDetailPage: any;
  showPage: Boolean = false;
  scanStep: Number = 1; // 1,请扫描打包人, 2-请扫描包条码
  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
    this.packageDetailPage = PackageDetailPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PackListPage');

  }

  changeScanStep() {
    this.scanStep = 2;
  }
  showIndexPage() {
    this.showPage = true;
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: '复核成功！',
      duration: 1000,
      position: 'middle',
      cssClass: 'custom-toast'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}
