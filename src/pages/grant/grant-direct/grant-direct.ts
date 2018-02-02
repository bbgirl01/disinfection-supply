import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the GrantDirectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-grant-direct',
  templateUrl: 'grant-direct.html',
})
export class GrantDirectPage {
  scanStep: Number = 1;
  showPage: Boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GrantDirectPage');
  }
  changScanStep() {
    this.scanStep = 2;
  }
  showIndexPage() {
    this.showPage = true;
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: '发放成功！',
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
