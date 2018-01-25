import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UpdatePasswordPage } from '../update-password';
@IonicPage()
@Component({
  selector: 'page-personal-index',
  templateUrl: 'personal-index.html',
})
export class PersonalIndexPage {
  updatePasswordPage: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.updatePasswordPage = UpdatePasswordPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalIndexPage');
  }

}
