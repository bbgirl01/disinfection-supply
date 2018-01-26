import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UpdatePasswordPage } from '../update-password';
import { LoginPage } from '../../login/login';
@IonicPage()
@Component({
  selector: 'page-personal-index',
  templateUrl: 'personal-index.html',
})
export class PersonalIndexPage {
  updatePasswordPage: any;
  loginPage: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.updatePasswordPage = UpdatePasswordPage;
    this.loginPage = LoginPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalIndexPage');
  }

}
