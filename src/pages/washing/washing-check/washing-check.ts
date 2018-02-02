import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { WashingFreePage } from '../washing-free';
import { WashingDetailListPage } from '../washing-detail-list';
/**
 * Generated class for the WashingCheckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-washing-check',
  templateUrl: 'washing-check.html',
})
export class WashingCheckPage {
  public modalDoor: boolean = false;
  public pans: Array<any> = [{ name: '清洗时间不足', choose: true }, { name: '清洗操作错误', choose: false }, { name: '清洗机故障', choose: false }, { name: '清洗设置出错', choose: false }]
  public machs: Array<any> = [{ name: '减压沸腾清洗机', choose: true }, { name: '手工清洗2', choose: false }, { name: '手工清洗4', choose: false }]
  public washingFreePage: any;
  public washingDetailListPage: any;
  public checking: boolean = false;
  public list: Array<any> = [{ name: '清洗盘', id: '19484743484', sum: '9', psum: 21 },
  { name: '清洗盘', id: '19484743484', sum: '1', psum: 52 },
  { name: '清洗盘', id: '19484743484', sum: '9', psum: 15 },
  { name: '清洗盘', id: '19484743484', sum: '3', psum: 13 },
  { name: '清洗盘', id: '19484743484', sum: '3', psum: 11 },
  { name: '清洗盘', id: '19484743484', sum: '1', psum: 37 }]
  public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: '摄氏度' }
  ];
  public lineChartLabels: Array<any> = ['12:52:12', '12:54:20', '12:55:01', '12:55:25', '12:56:20', '12:58:01', '12:59:09'];
  public lineChartOptions: any = {
    responsive: true,
    layout: {
      padding: {
        left: 12,
        right: 0,
        top: 15,
        bottom: 10
      }
    },
    scales: {
      xAxes: [{
        ticks: {
          fontSize: 12,
          fontColor: '#a5a5a5'
        },

      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 100,
          fontSize: 12,
          fontColor: '#a5a5a5',
          callback: function (value, index, values) {
            return value + '℃';
          }
        },
        gridLines: {
          color: '#e5e5e5',
          zeroLineColor: '#e5e5e5' // 线条颜色
        }
      }]

    }
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0)',
      borderColor: '#FA6865',
      pointWidth: 10,
      pointBackgroundColor: '#FA6865',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#FA6865'
    }

  ];
  public lineChartLegend: boolean = false;
  public lineChartType: string = 'line';
  constructor(private toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams) {
    this.washingFreePage = WashingFreePage
    this.washingDetailListPage = WashingDetailListPage
  }
  checkNow(flag) {
    if (this.checking) return;
    if (flag) {
      this.presentToast()
    } else {
      this.modalDoor = !this.modalDoor;
    }
  }
  showModal(flag) {
    this.modalDoor = false;

    if (flag) {
      this.navCtrl.push(this.washingFreePage)
    }

  }

  presentToast() {
    this.checking = true;
    let toast = this.toastCtrl.create({
      message: '产品检定合格!',
      duration: 1000,
      position: 'middle',
      cssClass: 'custom-toast'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
      this.navCtrl.push(this.washingFreePage)
    });

    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WashingCheckPage');
  }

  public checkedPan(index) {
    for (let i = 0; i < this.pans.length; i++) {
      this.pans[i]['choose'] = false;
    }
    this.pans[index]['choose'] = true;
  }

  public checkedMach(index) {
    for (let i = 0; i < this.machs.length; i++) {
      this.machs[i]['choose'] = false;
    }
    this.machs[index]['choose'] = true;
  }
  public randomize(): void {
    let _lineChartData: Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
