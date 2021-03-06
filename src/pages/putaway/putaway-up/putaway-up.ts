import { Component, Output, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PutawayChangePage } from '../putaway-change';
import { PackageDetailPage } from '../../package-detail';
// import { BarcodeScanner } from '@ionic-native/barcode-scanner';
/**
 * Generated class for the PutawayUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-putaway-up',
  templateUrl: 'putaway-up.html',
})
export class PutawayUpPage {
  info: any;
  putawayChangePage: any;
  packageDetailPage: any;
  qrData = null;
  createdCode = null;
  scannedCode = null;
  scanStep = 1;
  showPage = false;
  @Output() onFired: EventEmitter<any> = new EventEmitter<any>();
  constructor(
    //public barcodeScanner: BarcodeScanner, 
    public navCtrl: NavController, public navParams: NavParams) {
    this.putawayChangePage = PutawayChangePage;
    this.packageDetailPage = PackageDetailPage;
  }

  createCode() {
    this.createdCode = this.qrData;
  }

  scanCode() {
    // this.barcodeScanner.scan().then(barcodeData => {
    //   this.scannedCode = barcodeData.text;
    //   this.onFired.emit({ info: 0, test: 'kaka iscoming' });
    // })
  }

  goPages() {
    // this.onFired.emit({ info: 0, test: 'kaka iscoming' });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PutawayUpPage');
  }

  changeScanStep() {
    this.scanStep = 2;
  }

  showIndexPage() {
    this.showPage = true;
  }
}
