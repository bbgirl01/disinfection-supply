import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-package-detail',
  templateUrl: 'package-detail.html',
})
export class PackageDetailPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public appCtrl: App,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PackageDetailPage');
  }

  /**
   * 返回上一页
   */
  goPrevPage() {
    this.appCtrl.getRootNav().pop();
  }

  /**
   * 弹窗提示-确认撤销
   */
  confirmCancel() {
    let confirm = this.alertCtrl.create({
      title: '包条码：<span class="text-primary">457896621</span>',
      message: '已回收，是否撤销！',
      cssClass: 'custom-confirm',
      buttons: [
        {
          text: '否',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: '是',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
}
