import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgModel } from '@angular/forms';
import { TodayRecyclePage } from '../today-recycle/today-recycle';
import { PackageDetailPage } from '../../package-detail';

@IonicPage()
@Component({
  selector: 'page-recycle-list',
  templateUrl: 'recycle-list.html',
})
export class RecycleListPage implements OnInit{
  list = [{
    "id": 1,
    "checked": false,
    "name": "插值针",
    "img": "assets/imgs/item.jpg",
    "no": "16091015487",
    "number": 21,
    "status": 1
  },{
    "id": 2,
    "checked": false,
    "name": "区段器械包2",
    "img": "assets/imgs/item.jpg",
    "no": "16091015487",
    "number": 4,
    "status": 2
  },{
    "id": 3,
    "checked": true,
    "name": "洗胃包",
    "img": "assets/imgs/item.jpg",
    "no": "16091015487",
    "number": 4,
    "status": 2
  },{
    "id": 4,
    "checked": true,
    "name": "插值针",
    "img": "assets/imgs/item.jpg",
    "no": "16091015487",
    "number": 32,
    "status": 3
  }]
  checkAll: Boolean = false;
  todayRecyclePage: Object;
  packageDetailPage: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.todayRecyclePage = TodayRecyclePage;
    this.packageDetailPage = PackageDetailPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecycleListPage');
  }
  ngOnInit () {
    // this.list = this.getList();
    let checkAll = true;
    this.list.forEach((item, index) => {
      if (!item.checked) {
        checkAll = false;
      }
    });
    this.checkAll = checkAll;
  }

  toggleCheck (id){
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
  toggleCheckAll (event, parent) {
    console.log(this.checkAll);
  }
}
