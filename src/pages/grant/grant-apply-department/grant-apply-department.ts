import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-grant-apply-department',
  templateUrl: 'grant-apply-department.html',
})
export class GrantApplyDepartmentPage {
  tabs: Array<any> = ['骨科'];
  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GrantApplyDepartmentPage');
  }
  tabChange(index) {

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
