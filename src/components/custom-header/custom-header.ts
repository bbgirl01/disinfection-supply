import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { App } from 'ionic-angular';

@Component({
  selector: 'custom-header',
  templateUrl: 'custom-header.html'
})
export class CustomHeaderComponent implements OnInit {

  @Input() tabs = [];
  @Input() back = '';
  @Output() tabChange = new EventEmitter<any>();
  offsetLeft: String = '';

  constructor(public appCtrl: App) {
    //console.log('Hello CustomHeaderComponent Component');
    //this.text = 'Hello World';
  }
  ngAfterViewInit() {
    // let tabs = document.querySelectorAll('.tab');
    // console.log(tabs[0]);
    //this.lightActive(tabs[0], 0);
  }
  ngOnInit() {
    // console.log(this.tabs)
    // this.lightActive(1);
    // let tabs = document.querySelectorAll('.tab');
    // console.log(tabs[0]);
  }
  tabChangeFn(event, index) {
    this.lightActive(event, index);
    this.tabChange.emit(index);
  }

  lightActive(event, index) {

    let tabs = event.target.parentNode.querySelectorAll('.tab'),
      activeLine = document.querySelectorAll('.line'),
      offsetLeft = 0;

    // for (let i = 0; i <= index; i++) {
    //   if (i == index) {
    //     offsetLeft += tabs[i].getBoundingClientRect().width / 2;
    //   } else {
    //     offsetLeft += tabs[i].getBoundingClientRect().width;
    //   }
    // }
    // console.log(offsetLeft)
    // this.offsetLeft = offsetLeft + 'px';

    for (let i = 0, len = tabs.length; i < len; i++) {
      tabs[i].classList.remove('active');
    }
    tabs[index].classList.add('active');
  }

  /**
   * 返回上一页
   */
  goPrevPage() {
    this.appCtrl.getRootNav().pop();
  }
}
