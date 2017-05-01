import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
    template: `
<h1> component title:{{title}}</h1>
<h2> Test Sinatra - come test with me <br>
      come test withe me, lets test, lets test awaaayy </h2>
<h4> next test</h4>
<h6> next test</h6>
<p> p element </p>
  `,
})
export class BannerComponent {
  title = 'Testing5';
}



/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/