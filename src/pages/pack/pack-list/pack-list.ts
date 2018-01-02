import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PackageDetailPage } from '../../package-detail';

/**
 * Generated class for the PackListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pack-list',
  templateUrl: 'pack-list.html',
})
export class PackListPage {
  
  packageDetailPage: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.packageDetailPage = PackageDetailPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PackListPage');
    
  }

  
}
