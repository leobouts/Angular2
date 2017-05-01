import { Component, OnInit } from '@angular/core';

import { Customer } from './customer';
import { CustomerService } from './customer.service';

@Component({
  selector: 'my-app',
  template: ` 
<h2>Angular 2 services</h2>
   
<table >
<tr>
<th>First name</th>
<th> Last name</th>
<th> email</th>
</tr>
<tr *ngFor="let c of customers">
<td>{{c.first_name}}</td>
<td> {{c.last_name}}</td>
<td> {{c.email}}</td>
</tr>
</table>
  `,
  providers: [CustomerService],


 styles: [`
    
   
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
export class AppComponent implements OnInit {
 
  customers: Customer[];
  
  constructor(private customerService: CustomerService) { }

  getCustomers(): void {
    this.customerService.getCustomers().then(customers => this.customers = customers);
  }

  ngOnInit(): void {
    this.getCustomers();
  }

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/