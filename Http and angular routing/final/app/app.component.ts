import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    
    <div class="box1" >
    <h1>Παράδειγμα</h1>
    
    <nav>
      <a routerLink="/comp1" routerLinkActive="act1">1</a>
      <a routerLink="/comp2" routerLinkActive="act1">2</a>
    </nav>
    
    <router-outlet></router-outlet>

    </div >
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent {
 
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/