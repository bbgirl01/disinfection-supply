import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SortingListPage } from '../sorting-list';
/**
 * Generated class for the SortingScanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sorting-scan',
  templateUrl: 'sorting-scan.html',
})
export class SortingScanPage {
  sortingListPage: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sortingListPage = SortingListPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SortingScanPage');
  }

}
