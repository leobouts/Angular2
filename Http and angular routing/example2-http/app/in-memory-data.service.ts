import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let products = [
      {id: 1233, name: 'Laptop'},
      {id: 3242, name: 'Desktop'},
      {id: 3245, name: 'smartphone'},
      {id: 325432, name: 'Tablet'},
      {id: 1532523, name: 'ultra notebook'}
    ];
    return {products};
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/