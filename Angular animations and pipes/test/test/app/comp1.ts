import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <p>without Date Pipe: {{ date2 }}</p>
  <p>With Date Pipe: {{ date2 | date:"MM/dd/yy"}}</p>
  <p>With Date Pipe: {{ date2 | date:"dd/MM/yy"}}</p>
  <p>With Date Pipe fullDate : {{ date2 | date:'fullDate'}}</p>
  <p>With Date Pipe fullDate: {{ date2 | date:'shortDate'}}</p>
  <h3> chained pipes</h3>
  <p>With Date Pipe fullDate : {{ date2 | date:'fullDate'|uppercase}}</p>
  <p>With Date Pipe fullDate : {{ date2 | date:'fullDate'|lowercase}}</p>
  </div>
  `

})
export class comp1 {
  date2 = new Date(2016, 9, 28); 
}