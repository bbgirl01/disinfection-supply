import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { SterilizationFreePage } from '../sterilization-free';
/**
 * Generated class for the SterilizationCheckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sterilization-check',
  templateUrl: 'sterilization-check.html',
})
export class SterilizationCheckPage {
  public modalDoor: boolean = false;
  public pans: Array<any> = [{ name: '清洗时间不足', choose: true }, { name: '清洗操作错误', choose: false }, { name: '清洗机故障', choose: false }, { name: '清洗设置出错', choose: false }]
  public machs: Array<any> = [{ name: '减压沸腾清洗机', choose: true }, { name: '手工清洗2', choose: false }, { name: '手工清洗4', choose: false }]
  public checking: boolean = false;
  public list: Array<any> = [{ name: '插值针', id: '19484743484', sum: '99' },
  { name: '小针头', id: '22443743484', sum: '199' },
  { name: '巴蜀', id: '9084743484', sum: '9' },
  { name: '投蜜', id: '9048484', sum: '39' },
  { name: '云盘', id: '89344009', sum: '3' },
  { name: '针线', id: '98744244', sum: '12' }];
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
  public sterilizationFreePage: any;
  constructor(private toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams) {
    this.sterilizationFreePage = SterilizationFreePage
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
      this.navCtrl.push(this.sterilizationFreePage)
    }

  }

  presentToast() {
    this.checking = true;
    let toast = this.toastCtrl.create({
      message: '产品检定合格',
      duration: 2000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
      this.navCtrl.push(this.sterilizationFreePage)
    });

    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SterilizationCheckPage');
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
