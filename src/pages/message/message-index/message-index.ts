import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SendMessagePage } from '../send-message';
import { MessageDetailPage } from '../message-detail';

@IonicPage()
@Component({
  selector: 'page-message-index',
  templateUrl: 'message-index.html',
})
export class MessageIndexPage {
  tabIndex: Number = 0;
  sendMessagePage: any;
  messageDetailPage: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sendMessagePage = SendMessagePage;
    this.messageDetailPage = MessageDetailPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessageIndexPage');
  }

  tabChange(index) {
    this.tabIndex = index;
  }
}
