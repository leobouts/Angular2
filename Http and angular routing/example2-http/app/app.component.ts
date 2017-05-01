import { Component }          from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <div class="box1">
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/products" routerLinkActive="act1">get products</a>
    </nav>
    <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'http  example';
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/