import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-grant-apply-department',
  templateUrl: 'grant-apply-department.html',
})
export class GrantApplyDepartmentPage {
  tabs: Array<any> = ['骨科'];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GrantApplyDepartmentPage');
  }
  tabChange(index) {

  }
}
