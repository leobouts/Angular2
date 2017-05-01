import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <input [(ngModel)]="address" #f="ngModel" required>
    <p>Value: {{ address }}</p>
    <p>Valid: {{ f.valid }}</p>
   
  `,
})
export class AppComponent {
  address: string = '';
  
}