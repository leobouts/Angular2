import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import { Customer } from './customer';
import { CustomerService } from './customer.service';

@Component({
  selector: 'my-app',
  template: `
    <form #f="ngForm" (ngSubmit)="onSubmit(f)" novalidate>
      <input name="onoma" ngModel minlength="5"  #onoma="ngModel" placeholder="Kostas"> <br>
      <input name="epitheto" ngModel maxlength="10" required  #epitheto="ngModel" placeholder="Papadopoulos"> <br>
      <input name="dieuthinsi" ngModel maxlength="20"   #dieuthinsi="ngModel" placeholder="venizelou 3"> <br>
      <input name="tilefono" ngModel  pattern="[0-9]{10}" maxlength="10"  #tilefono="ngModel" placeholder="6912345678"> <br>
      <button type="submit">Submit</button>
    </form>
    <p>First name {{ onoma.value }}</p>
    <p>last name  {{ epitheto.value }}</p>
    <p>adress (optional)  {{ dieuthinsi.value }}</p>
    <p>tilefono  valid: {{ tilefono.valid }}</p>
    <p>last name  {{ epitheto.value }}</p>
    <p>First name valid: {{ onoma.valid }}</p>
    <p>Form valid: {{ f.valid }}</p>

    <h2>Angular 2 services</h2>
    <table >
    <tr>
    <th>First name</th>
    <th> Last name</th>
    <th> Phone number</th>
    </tr>
    <tr *ngFor="let c of customers">
    <td>{{c.onoma}}</td>
    <td> {{c.epitheto}}</td>
    <td> {{c.tilefono}}</td>
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
export class AppComponent {
  onSubmit(f: NgForm) {
    console.log(f.value);  
    console.log(f.valid);  
    
  }
}

export class AppComponent1 implements OnInit {
 
  customers: Customer[];
  
  constructor(private customerService: CustomerService) { }

  getCustomers(): void {
    this.customerService.getCustomers().then(customers => this.customers = customers);
  }

  ngOnInit(): void {
    this.getCustomers();
  }

}