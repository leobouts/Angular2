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

 <h3>Product</h3>
  <ul class="prod_css">
  <li> id: {{pr.id}} </li>
  <li> first name: {{pr.name}} </li>
  <li> first name: {{pr.price}} </li>
  </ul>


<comp2>      </comp2>


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
  pr: Products = {
    id: 154635656543654345,
    name: 'LXV-99',
    price: 458
}

cmr: Customers = {
    id: 1,
    first_name: 'Maria',
last_name: 'Papadopoulou'

}
}