import { Component } from '@angular/core';

@Component({
  selector: 'my-app',

 templateUrl: 'app/app.component.html'
,
  styles: [`
h3{text-align:center;}
.carousel-inner{
  width:100%;
  max-height: 400px ;
}	
  `]

})
export class AppComponent  { 
  label_0= 'TARDIS';
  email_0='doctorwho@TimeAndSpace.milkyway';
  phone_0='07700 900461' ;
  label_1= 'Some NASA planes';
  email_1='contact@nasa.gov';
  phone_1='(202) 358-0001';
  label_2= 'kermit the frog';
  email_2='kermit@sesane.street';
  phone_2='12354436546';

 }