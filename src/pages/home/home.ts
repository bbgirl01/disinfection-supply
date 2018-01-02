import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RecycleIndexPage } from '../recycle/recycle-index/recycle-index';
import { SortingScanPage } from '../sorting/sorting-scan/sorting-scan';
import { WashingHomePage } from '../washing/washing-home';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  recyclePage: Object;
  sortingScanPage: any;
  washingHomePage: any;
  params: object = { test: 'i am is kaka' };
  constructor(public navCtrl: NavController) {
    this.recyclePage = RecycleIndexPage;
    this.sortingScanPage = SortingScanPage;
    this.washingHomePage = WashingHomePage
  }

}
