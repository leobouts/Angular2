import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>this is keyup.enter event</h1>
    <input #f (keyup.enter)="message=f.value">
    <p>{{message}}</p>
  `
})
export class AppComponent {
  message = '';
  
}