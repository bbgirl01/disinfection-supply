import { Component } from '@angular/core';

/**
 * Generated class for the LoginInfoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login-info',
  templateUrl: 'login-info.html'
})
export class LoginInfoComponent {

  text: string;

  constructor() {
    console.log('Hello LoginInfoComponent Component');
    this.text = 'Hello World';
  }

}
