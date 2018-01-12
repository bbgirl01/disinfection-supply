import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SterilizationStartPage } from '../sterilization-start';
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
  public list: Array<any> = [{ name: '膀胱冲洗包', id: '19484743484', sum: '99' },
  { name: '手术被褥', id: '22443743484', sum: '199' },
  { name: '手术刀具', id: '9084743484', sum: '9' },
  { name: '垫片', id: '9048484', sum: '39' },
  { name: '剪刀', id: '89344009', sum: '3' },
  { name: '其他器械', id: '98744244', sum: '12' }]
  // lineChart
  public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: '摄氏度' }
  ];
  public lineChartLabels: Array<any> = ['12:52:12', '12:54:20', '12:55:01', '12:55:25', '12:56:20', '12:58:01', '12:59:09'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }

  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';
  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
    this.sterilizationStartPage = SterilizationStartPage
  }

  public showModal() {
    this.modalDoor = !this.modalDoor;
  }

  public showAlert() {
    let alert = this.alertCtrl.create({
      title: '确认作废',
      message: '确定要废除该清洗页面吗?',
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
