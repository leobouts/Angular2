import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
   <h1>Angular 2 classes</h1>
  <div>fisrst name: {{ first_name }}</div>
  <div>last name: {{ last_name }}</div>
  <div>id: {{ id }}</div>
  
    `
})
export class AppComponent {
  
   first_name: string;
 last_name :string ;
 id: number ;
constructor() {
 this.first_name = 'Maria';
 this.last_name = 'Papadopoulou';
 this.id =15;
 } 

}




  
  
  
