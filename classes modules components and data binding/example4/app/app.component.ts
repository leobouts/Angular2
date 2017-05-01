import { Component } from '@angular/core';
import { Products} from './product';


@Component({
  
  selector: 'my-app',
  template: `    <h1>mutiple classes</h1>
  
<h1> {{prs3.name}}</h1>
<h1> {{this.prs[3].name}}</h1>
<ol class="prod_css">
<li *ngFor="let pr of prs">
  <span >{{pr.id}}</span> {{pr.name}}
</li>
</ol>
<hr>
<h5 *ngFor="let pr of prs">
  <span >{{pr.id}}</span> {{pr.name}}
</h5>
<hr>
<table >
<tr>
<th>Product id</th>
<th> Product_name</th>
</tr>
<tr *ngFor="let pr of prs">
<td>{{pr.id}}</td>
<td> {{pr.name}}</td>
</tr>
</table>
  `,

 styles: [`
    
    .prod_css, .cust_css {
      width: 35em;
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


table {
    border-collapse: collapse;
    width: 100%;
    color:red;
    border: 1px solid black;
}

th, td {
    text-align: left;
    padding: 8px;
    border: 1px solid black;
}
tr:nth-child(even){background-color: #f2f2f2}
tr:hover {background-color: #9fbbdd} 
    
  `]
})

export class AppComponent {
 prs = [
    new Products(1, 'laptop glx-turbo'),
    new Products(12, 'desktop ALV'),
    new Products(14, 'tablet RS'),
    new Products(20, 'smarthphone bg-100')
  ];

prs3=this.prs[0];
}