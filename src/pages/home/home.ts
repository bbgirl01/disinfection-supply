import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RecyclePage } from '../recycle/recycle';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  recyclePage: Object;
  constructor(public navCtrl: NavController) {
    this.recyclePage = RecyclePage;
  }

}
