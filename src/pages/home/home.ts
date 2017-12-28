import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RecycleIndexPage } from '../recycle/recycle-index/recycle-index';
import { SortingScanPage } from '../sorting/sorting-scan/sorting-scan';
import { WashingFreePage } from '../washing/washing-free';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  recyclePage: Object;
  sortingScanPage: any;
  washingFreePage: any;
  constructor(public navCtrl: NavController) {
    this.recyclePage = RecycleIndexPage;
    this.sortingScanPage = SortingScanPage;
    this.washingFreePage = WashingFreePage
  }

}
