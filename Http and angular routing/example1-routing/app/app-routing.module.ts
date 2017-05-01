import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Comp1Component }   from './comp1.component';
import { Comp2Component }   from './comp2.component';


const routes: Routes = [
  { path: '', redirectTo: '/comp1', pathMatch: 'full' },
  { path: 'comp1',  component: Comp1Component },
    { path: 'comp2',  component: Comp2Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/