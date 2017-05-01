import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Angular 2 and Bootstrap</h1>
  
 
  <div class="container">
  <div class="row">
  <div class="col-lg-4     col-md-4 col-sm-4 col-xs-4"  >

   <table class="table-hover">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Phone</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>George</td>
        <td>freeman</td>
        <td>2134563432542</td>
      </tr>
      <tr>
        <td>Maria</td>
        <td>Papadopoulou</td>
        <td>4545345245234/td>
      </tr>
      <tr>
        <td>John</td>
        <td>jackman</td>
        <td>3241354532534</td>
      </tr>
    </tbody>
  </table>
</div>
 </div>
<div class="row">
 <div class="col-lg-4     col-md-4 col-sm-4 col-xs-4"  >
 <h4> Responsive table </h4>
<div class="table-responsive">
   <table class="table">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Phone</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>George</td>
        <td>freeman</td>
        <td>2134563432542</td>
      </tr>
      <tr>
        <td>Maria</td>
        <td>Papadopoulou</td>
        <td>4545345245234/td>
      </tr>
      <tr>
        <td>John</td>
        <td>jackman</td>
        <td>3241354532534</td>
      </tr>
    </tbody>
  </table>
  </div>
</div>
</div>

<div class="row">
 <div class="col-lg-4     col-md-4 col-sm-4 col-xs-4"  >

   <table class="table">
    <thead>
      <tr class="danger">
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Phone</th>
      </tr>
    </thead>
    <tbody>
      <tr class="warning">
        <td>George</td>
        <td>freeman</td>
        <td>2134563432542</td>
      </tr>
      <tr class="active">
        <td>Maria</td>
        <td>Papadopoulou</td>
        <td>4545345245234/td>
      </tr>
      <tr class="info">
        <td>John</td>
        <td>jackman</td>
        <td>3241354532534</td>
      </tr>
    </tbody>
  </table>
</div>
     </div>








      
    </div>
    
  `,
})
export class AppComponent  { 
  data= 'Column';
 }