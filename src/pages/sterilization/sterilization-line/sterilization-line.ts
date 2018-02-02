import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SterilizationStartPage } from '../sterilization-start';
import { PackageDetailPage } from '../../package-detail';
/**
 * Generated class for the SterilizationLinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sterilization-line',
  templateUrl: 'sterilization-line.html',
})
export class SterilizationLinePage {
  public sterilizationStartPage: any;
  public pans: Array<any> = [{ name: '灭菌机故障', choose: true }, { name: '操作故障', choose: false }, { name: '其他原因', choose: false }]
  public machs: Array<any> = [{ name: '高温灭菌机1', choose: true }, { name: '高温灭菌机2', choose: false }, { name: '环氧乙烷灭菌机', choose: false }]
  public modalDoor: boolean = false;
  public list: Array<any> = [{ name: '膀胱冲洗包', id: '19484743484', sum: '9', psum: 21 },
  { name: '膀胱冲洗包', id: '19484743484', sum: '1', psum: 52 },
  { name: '膀胱冲洗包', id: '19484743484', sum: '9', psum: 15 },
  { name: '膀胱冲洗包', id: '19484743484', sum: '3', psum: 13 },
  { name: '膀胱冲洗包', id: '19484743484', sum: '3', psum: 11 },
  { name: '膀胱冲洗包', id: '19484743484', sum: '1', psum: 37 }]
  // lineChart
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
  packageDetailPage: any;
  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
    this.sterilizationStartPage = SterilizationStartPage
    this.packageDetailPage = PackageDetailPage;
  }

  public showModal() {
    this.modalDoor = !this.modalDoor;
  }
  public hideModal() {
    this.modalDoor = false;
  }
  public showAlert() {
    let alert = this.alertCtrl.create({
      title: '确认作废',
      message: '确定要废除该清洗页面吗?',
      cssClass: 'custom-confirm',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '确定',
          handler: () => {
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad SterilizationLinePage');
  }

}
