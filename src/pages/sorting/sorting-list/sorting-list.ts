import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { SortingDetailPage } from '../sorting-detail';
/**
 * Generated class for the SortingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sorting-list',
  templateUrl: 'sorting-list.html',
})
export class SortingListPage {
  sortingDetailPage: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
    this.sortingDetailPage = SortingDetailPage
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SortingListPage');
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: '分拣成功！',
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
