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
            <div class="box2" [@anm]='state' >
            </div>
            </div>
    `,
    styles: [`
        button { color:blue; background:yellow;}
        .box2 { width:100px;height:100px ;
background:    -webkit-linear-gradient(#0d3c59, #04a398);
background:    linear-gradient(#0d3c59, #04a398);             
border-radius: 50px;     
}

.box1{
width: 500px;
height:500px;
border: 10px solid blue;
background:    cyan;
background:    -webkit-linear-gradient(#fff2cc, #bf9000);
background:    linear-gradient(#fff2cc, #bf9000);  
}
    `],
   
animations: [
  trigger('anm', [
    state('state2', style({transform: 'translate(100px,100px)'})),
    transition('state1 =>state2', [
      animate('3s', keyframes([
        style({ transform: 'translate(10px,20px)', offset: 0}),
        style({ transform: 'translate(15px,40px)',  offset: 0.4}),
        style({ transform: 'translate(45px,45px)',     offset: 0.6}),
         style({ transform: 'translate(65px,65px)',     offset: 0.6}),
        style({ transform: 'translate(100px,100px)',     offset: 1.0})
      ]))
    ]),
    transition('state2=>state1', [
      animate('3s', keyframes([
        style({ transform: 'translate(25px,120px)',     offset: 0}),
        style({ transform: 'translate(50px,95px)', offset: 0.4}),
        style({ transform: 'translate(10px,35px)',  offset: 1.0})
      ]))
    ])
  ])
]

})
export class AppComponent { 

    state: string = 'state1';

    toggle2() {
        this.state = (this.state === 'state1' ? 'state2' : 'state1');
    }

}