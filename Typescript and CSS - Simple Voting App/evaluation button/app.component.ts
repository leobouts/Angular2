import { Component } from "@angular/core";
@Component({
    selector:'my-app',
    template:`<button class="b2"(click)="voteUp()">up</button>
              <button class="b3"(click)="voteDown()">down</button>
              <button class="b2"(click)="voteUp1()">up</button>
              <button class="b3"(click)="voteDown1()">down</button>
              <button class="b3"(click)="add()">add</button>
              <button class="b3" type="button">{{vote}}</button>
              <h4>{{'+'}}</h4>
              <button class="b1" type="button">{{vote1}}</button>
              <h4>{{'='}}</h4>
              <button class="b1" type="button">{{sum}}</button>
              <div/>`

})
export class AppComponent{
    vote=0;
    vote1=0;
    sum=0;
    voteUp(){
        this.vote +=1;
        ;
    }
    voteDown(){
        this.vote-=1;
        ;
    }
    voteUp1(){
        this.vote1 +=1;
        ;
    }
    voteDown1(){
        this.vote1-=1;
        ;
    }
    add(){
        this.sum=this.vote+this.vote1;
        ;
    }
}