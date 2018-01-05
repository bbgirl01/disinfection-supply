import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PutawayChangePage } from '../putaway-change';
/**
 * Generated class for the PutawayUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-putaway-up',
  templateUrl: 'putaway-up.html',
})
export class PutawayUpPage {
  info: any;
  putawayChangePage: any;
  @Output() onFired: EventEmitter<any> = new EventEmitter<any>();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.putawayChangePage = PutawayChangePage
  }

  goPages() {
    this.onFired.emit({ info: 0, test: 'kaka iscoming' });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PutawayUpPage');
  }

}
