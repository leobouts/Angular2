import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="div1">
  <h1> Voting </h1>
    <button class="b2" (click)="voteUp()" >up</button>
    <button class="b3" (click)="voteDown()">down</button>
<h2> voting result</h2>

<button class="b1" >{{vote}} </button>
</div>
    `
})
export class AppComponent {
  vote = 0;
  voteUp() {
    this.vote += 1;
    ;
  }
   voteDown() {
    this.vote -= 1;
    ;
  }
}