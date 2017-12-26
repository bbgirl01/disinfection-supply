import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-recycle',
  templateUrl: 'recycle.html',
})
export class RecyclePage {
  loginPage: Object;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.loginPage = LoginPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecyclePage');
  }

  tabChange(e) {
    let target = e.target,
      siblingEles = target.parentNode.childNodes;

    for (let i = 0, len = siblingEles.length; i < len; i++) {
      if (siblingEles[i].className != 'line') {
        siblingEles[i].className = '';
      }    
    }
    target.className='active';
  }

}
