import { Component } from '@angular/core';
import { IonicPage, NavController, App, NavParams } from 'ionic-angular';

/**
 * Generated class for the MessageDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message-detail',
  templateUrl: 'message-detail.html',
})
export class MessageDetailPage {

  constructor(public navCtrl: NavController, public appCtrl: App, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessageDetailPage');
  }

  /**
   * 返回上一页
   */
  goPrevPage() {
    this.appCtrl.getRootNav().pop();
  }
}
