import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1> key enter with blur </h1>
     <input #f (keyup.enter)="message=f.value" (blur)="message=f.value">
    <p myDirective>{{message}}</p>
  `
})
export class AppComponent {
   values = '';
  }