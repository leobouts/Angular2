import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `  
  <div class="box1">
  <h1> Angular 2 Pipes</h1>
  <p>without Date Pipe: {{ date1 }}</p>
  <p>With Date Pipe: {{ date1 | date }}</p>
  </div>
  `
,
 styles: [`

.box1{
width: 500px;
height:500px;
border: 25px solid red;
background:    #fff2cc;
background:    -webkit-linear-gradient(#fff2cc, #bf9000);
background:    linear-gradient(#fff2cc, #bf9000);  
color:#720337;
}
    `]
})
export class AppComponent {
  date1 = new Date(2016, 9, 28); 
}