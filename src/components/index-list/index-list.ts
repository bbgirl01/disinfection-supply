import { Component, OnInit } from '@angular/core';

/**
 * Generated class for the IndexListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'index-list',
  templateUrl: 'index-list.html'
})
export class IndexListComponent implements OnInit {
  listData = [
    {
      "name": "★Hot City",
      "items": [
        {
          "name": "BEIJING",
          "value": 1
        },
        {
          "name": "SHANGHAI",
          "value": 2
        }
      ]
    },
    {
      "name": "A",
      "items": [
        {
          "name": "ANSHAN",
          "value": 3
        },
        {
          "name": "ANQING",
          "value": 4
        }
      ]
    }
  ]
  text: string;

  constructor() {
    console.log('Hello IndexListComponent Component');
    this.text = 'Hello World';
  }

  ngOnInit() {
    this.touchNavFn();
  }

  touchNavFn() {
    let nav = document.getElementById('nav');

    nav.ontouchmove = function (event) {
      console.log(event.changedTouches[0]);
    }
  }

  //scrollList()
}
