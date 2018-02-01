import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { NgModel } from '@angular/forms';
import { TodayRecyclePage } from '../today-recycle/today-recycle';
import { PackageDetailPage } from '../../package-detail';

@IonicPage()
@Component({
  selector: 'page-recycle-list',
  templateUrl: 'recycle-list.html',
})
export class RecycleListPage implements OnInit {
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
  }]
  checkAll: Boolean = false;
  todayRecyclePage: Object;
  packageDetailPage: Object;
  showPage: Boolean = false;
  showPopup: Boolean = false;
  recipientScan: Boolean = false; // 是否扫描过收人信息
  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
    this.todayRecyclePage = TodayRecyclePage;
    this.packageDetailPage = PackageDetailPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecycleListPage');
  }
  ngOnInit() {
    // this.list = this.getList();
    let checkAll = true;
    this.list.forEach((item, index) => {
      if (!item.checked) {
        checkAll = false;
      }
    });
    this.checkAll = checkAll;
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

  /**
   * 扫描完科室-展示列表
   */
  showIndexPage() {
    this.showPage = true;
  }

  /**
   * 扫描收人信息
   */
  recipientScanFn() {
    this.recipientScan = true;
  }

  /**
   * 回收成功
   */
  presentToast() {
    let toast = this.toastCtrl.create({
      message: '回收成功！',
      duration: 1000,
      position: 'middle',
      cssClass: 'custom-toast'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  chooseDepartment() {
    this.showPopup = true;
  }
  hidePopup() {
    this.showPopup = false;
  }
}
