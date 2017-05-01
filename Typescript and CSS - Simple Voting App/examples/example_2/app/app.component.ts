import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<div>
<h3> Εισαγωγή με interpolation </h3>
 <img src="{{sr1}}" style="height:300px; border-style: ridge;border-color:grey;border-width: 4px 5px 4px 20px;">
</div>

<div>
<h3> Εισαγωγή με property binding </h3>
 <img [src]="sr2" style="height:300px; border-style: ridge;border-color:grey;border-width: 4px 5px 4px 20px;">
</div>

    `
})
export class AppComponent {
sr1=' images/img1.jpg';
sr2=' images/img2.jpg';
}