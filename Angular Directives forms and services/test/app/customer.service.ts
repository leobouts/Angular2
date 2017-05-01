import { Injectable } from '@angular/core';

import { Customer } from './customer';
import {CUSTOMERS } from './customer.list';

@Injectable()
export class CustomerService {
  getCustomers(): Promise<Customer[]> {
    return Promise.resolve(CUSTOMERS);
  }
  
}
