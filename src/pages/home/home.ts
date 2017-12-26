import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RecyclePage } from '../recycle/recycle';
import { SortingScanPage } from '../sorting/sorting-scan/sorting-scan';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  recyclePage: Object;
  sortingScanPage: any;
  constructor(public navCtrl: NavController) {
    this.recyclePage = RecyclePage;
    this.sortingScanPage = SortingScanPage
  }

}
