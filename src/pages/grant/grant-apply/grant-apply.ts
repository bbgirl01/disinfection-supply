import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { GrantApplyDepartmentPage } from '../grant-apply-department';

@IonicPage()
@Component({
  selector: 'page-grant-apply',
  templateUrl: 'grant-apply.html',
})
export class GrantApplyPage {
  grantApplyDepartmentPage: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.grantApplyDepartmentPage = GrantApplyDepartmentPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GrantApplyPage');
  }

}
