import { Injectable } from '@angular/core';

import { Customer } from './customer';
import {CUSTOMERS } from './customer.list';

@Injectable()
export class CustomerService {
  getCustomers(): Promise<Customer[]> {
    return Promise.resolve(CUSTOMERS);
  }
  
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/