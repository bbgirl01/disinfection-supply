import { Component, Input } from '@angular/core';

/**
 * Generated class for the ScanComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'scan',
  templateUrl: 'scan.html'
})
export class ScanComponent {
  @Input() scanType = 1; // 1-扫描科室，2-扫描打包人，3-扫描包条码，4-请扫描存储架，5-扫描病人条码
  text: string;

  constructor() {
    console.log('Hello ScanComponent Component');
    this.text = 'Hello World';
  }

}
