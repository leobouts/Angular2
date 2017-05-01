import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Angular 2 and Security</h1>
  <div class="container">
  <div class="row">
  <div class="col-lg-10     col-md-10 col-sm-10 col-xs-10  "  style="background-color:#1f509e;">
<h3  style="color:white;text-align:center;">inject  code with binding innerHTML </h3>
</div>    
<div class="col-lg-10   col-md-10 col-sm-10 col-xs-10 "   style="background-color:yellow;color:blue"> {{ data }}2
      <br>
   <h4>interpolation is not interpreted</h4>
<p >{{invader}}</p>
<h4> binding to innerHTML is  interpreted</h4>
<p  [innerHTML]="invader"></p>
 </div>
    </div>
    </div>
  `,
})
export class AppComponent  { 
  data= 'Column';
  invader = 'This is injected code  <script>alert("code1")</script> <h3>with script tags</h3>';

 }