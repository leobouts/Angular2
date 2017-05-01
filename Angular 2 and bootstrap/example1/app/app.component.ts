import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Angular 2 and Bootstrap</h1>
  
 
  <div class="container">
  <div class="row">
  <div class="col-md-12"  style="background-color:#1f509e;">
<h3  style="color:white;text-align:center;">Container with 3 columns </h3>
</div>
  </div>
  <div class="row">
      <div class="col-md-4"   style="background-color:red;color:blue"> {{ data }}1</div>
     <div class="col-md-4"   style="background-color:yellow;color:blue">{{ data }}2</div>
     <div class="col-md-4"   style="background-color:green;color:blue"> {{ data }}3</div>
    </div>
<hr>
 <div class="row">
      <div class="col-md-3"   style="background-color:red;color:blue"> {{ data }}1</div>
     <div class="col-md-3"   style="background-color:yellow;color:blue">{{ data }}2</div>
     <div class="col-md-3"   style="background-color:green;color:blue"> {{ data }}3</div>
     <div class="col-md-3"   style="background-color:grey;color:blue"> {{ data }}4</div>
    </div>
  </div>
  
  `,
})
export class AppComponent  { 
  data= 'Column';
 }