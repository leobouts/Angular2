import { Component } from '@angular/core';
import { Products} from './product';
import { Customers} from './customer';

@Component({
  
  selector: 'my-app',
  template: `    <h1>mutiple classes</h1>
  <h3>Customer</h3>
  <ul class="cust_css">
  <li> id: {{cmr.id}} </li>
  <li> first name: {{cmr.first_name}} </li>
  <li> first name: {{cmr.last_name}} </li>
  </ul>

<ul class="prod_css">
<li *ngFor="let pr of prs">
  <span class="badge">{{pr.id}}</span> {{pr.name}}
</li>

</ul>


  `,

 styles: [`
    
    .prod_css, .cust_css {
      width: 15em;
      color:white;
      background-color: #e6e6e6;
    }
    .prod_css li, .cust_css li {
        padding: 8px;
      cursor: grab;
      position: relative;
      left: 0;
      background-color: red;
      margin:7px;
      border-radius: 4px;
    }
    .prod_css li:hover, .cust_css li:hover {
      color: #a65959;
      background-color: #ff1a75;  
    }
        
  `]

})

export class AppComponent {
 prs = [
    new Products(1, 'Wim'),
    new Products(12, 'storm'),
    new Products(14, 'rmcar'),    
    new Products(20, 'bmw')
  ];

cmr: Customers = {
    id: 1,
    first_name: 'Maria',
last_name: 'Papadopoulou'
}
}