import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<h1> {{res}} {{a+b}}</h1>
    `
})
export class AppComponent {
a=5;
b=6;
res='το αποτελεσμα του πολλαπλασισμού των αριθμών 5 και 6 είναι:';
}