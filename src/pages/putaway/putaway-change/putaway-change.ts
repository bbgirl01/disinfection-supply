import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PackageDetailPage } from '../../package-detail';

/**
 * Generated class for the PutawayChangePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-putaway-change',
  templateUrl: 'putaway-change.html',
})
export class PutawayChangePage {
  @Input() showInfo: number = 1;  //0表示上架、1表示换架
  list = [{
    "id": 1,
    "checked": false,
    "name": "插值针",
    "img": "assets/imgs/item.jpg",
    "no": "16091015487",
    "number": 21,
    "status": 1
  }, {
    "id": 2,
    "checked": false,
    "name": "区段器械包2",
    "img": "assets/imgs/item.jpg",
    "no": "16091015487",
    "number": 4,
    "status": 2
  }, {
    "id": 3,
    "checked": true,
    "name": "洗胃包",
    "img": "assets/imgs/item.jpg",
    "no": "16091015487",
    "number": 4,
    "status": 2
  }, {
    "id": 4,
    "checked": true,
    "name": "插值针",
    "img": "assets/imgs/item.jpg",
    "no": "16091015487",
    "number": 32,
    "status": 3
  }];
  checkAll: Boolean = false;
  showPage: Boolean = false;
  packageDetailPage: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams)
    this.packageDetailPage = PackageDetailPage;
  }

  toggleCheck(id) {
    console.log(id)
    this.list.forEach((item, index) => {
      if (item.id == id) {
        item.checked = !item.checked;
      }
    });
  }

  /**
   * 全选
   */
  toggleCheckAll(event, parent) {
    console.log(this.checkAll);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PutawayChangePage');
  }
  showIndexPage() {
    this.showPage = true;
  }
}
