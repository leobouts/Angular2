import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>this is onclick event</h1>
    <p>Value: {{ message }}</p>
   <button (click)="onClickMe()">Click</button>
   
  `
})
export class AppComponent {
  message: string = '';
  onClickMe() {
    this.message= 'this is onclick event!!!!!!!!';
  }
}