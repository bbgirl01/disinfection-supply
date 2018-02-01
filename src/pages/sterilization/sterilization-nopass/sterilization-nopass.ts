import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PackageDetailPage } from '../../package-detail';

/**
 * Generated class for the SterilizationNopassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sterilization-nopass',
  templateUrl: 'sterilization-nopass.html',
})
export class SterilizationNopassPage {
  public details: Array<any> = [{ name: '插值针/剪刀', ques: '锈迹', deal: '除锈' },
  { name: '插值针/剪刀', ques: '钝了', deal: '锋利' },
  { name: '插值针/剪刀', ques: '锈迹', deal: '除锈' }

  ]
  public list: Array<any> = [{ name: '膀胱冲洗包', id: '19484743484', psum: '5', sum: '21' },
  { name: '膀胱冲洗包', id: '22443743484', psum: '5', sum: '21' },
  { name: '膀胱冲洗包', id: '22443743485', psum: '2', sum: '17' },
  { name: '膀胱冲洗包', id: '22443743486', psum: '4', sum: '35' },
  { name: '膀胱冲洗包', id: '22443743487', psum: '7', sum: '13' },
  { name: '膀胱冲洗包', id: '22443743488', psum: '9', sum: '70' }]
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
  public packageDetailPage: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.packageDetailPage = PackageDetailPage;
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
    console.log('ionViewDidLoad SterilizationNopassPage');
  }

}
