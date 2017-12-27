import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SortingDetailPage } from '../sorting-detail';
/**
 * Generated class for the SortingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sorting-list',
  templateUrl: 'sorting-list.html',
})
export class SortingListPage {
  sortingDetailPage: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sortingDetailPage = SortingDetailPage
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SortingListPage');
  }

}
