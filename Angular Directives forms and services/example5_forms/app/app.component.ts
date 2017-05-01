import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'my-app',
  template: `
    <form #f="ngForm" (ngSubmit)="onSubmit(f)" novalidate>
      <input name="first_name" ngModel minlength="5"  #first_name="ngModel" placeholder="George"> <br>
      <input name="last_name" ngModel maxlength="10" required  #last_name="ngModel" placeholder="Papagiannis"> <br>
      <input name="nickname" ngModel  pattern="[A-Za-z]{5}"   #email="ngModel" placeholder="Papagiannis@drmail.com"> <br>
      <button type="submit">Submit</button>
    </form>
    <p>First name {{ first_name.value }}</p>
    <p>last name  {{ last_name.value }}</p>
    <p>email  valid: {{ email.valid }}</p>
    <p>First name valid: {{ first_name.valid }}</p>
    <p>Form valid: {{ f.valid }}</p>
  `,
})
export class AppComponent {
  onSubmit(f: NgForm) {
    console.log(f.value);  
    console.log(f.valid);  
    
  }
}