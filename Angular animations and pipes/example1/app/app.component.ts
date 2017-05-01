import { 
    Component,
    trigger,
    state,
    style,
    transition,
    animate,
    keyframes
 } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div class="box1">
    <h1> animation</h1>    
            <button (click)="toggle2()">animation</button> 
            <div class="box2" [@anm]='state' >animation
            </div>
            </div>
    `,
    styles: [`
        button { color:blue; background:yellow;}
        .box2 { width:100px;height:100px ; background:red; }

.box1{
width: 500px;
height:500px;
    border: 25px solid red;
    background:    #fff2cc;
background:    -webkit-linear-gradient(#fff2cc, #bf9000);
background:    linear-gradient(#fff2cc, #bf9000);
   
}
    `],
   
animations: [
  trigger('anm', [
    state('state1', style({transform: 'translateX(50px) scale(1)' })),
    state('state2',   style({ transform: 'translateX(300px) rotate(20deg) scale(1.5) ' })),
    transition('state1 <=> state2', animate('200ms ease-in')),
    transition('state1 => state2', animate('200ms ease-out')),

  ])
]

})
export class AppComponent { 

    state: string = 'state1';

    toggle2() {
        this.state = (this.state === 'state1' ? 'state2' : 'state1');
    }

}