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
    <p>without Date Pipe: {{ date1 }}</p>
    <p>With Date Pipe: {{ date1 | date }}</p>
    </div>
    </div>
    `,
    styles: [`  
        button { color:blue; background:#00FFF;
        }

        .box2 { 
        width:100px;height:220px ;
        background:    -webkit-linear-gradient(#0d3c59, #04a398);
        background:    linear-gradient(#0d3c59, #04a398);             
       
        }

        .box1{
          margin-left: auto;
          margin-right: auto;
          text-align: center;
          width: 600px;
           height:600px;
          border: dotted 3px blue;
          background:    #00FFF;
          background:    -webkit-linear-gradient(#00FFF, #00FFF);
          background:    linear-gradient(#00FFF, #00FFF);  
        }
    `],
   
animations: [
  trigger('anm', [
    state('state2', style({transform: 'translate(500px,0px)'})),
    transition('state1 =>state2', [
      animate('3s', keyframes([
        style({ transform: 'translate(0px,0px)', offset: 0}),
        style({ transform: 'translate(200px,0px)',  offset: 0.4}),
        style({ transform: 'translate(300px,0px)',     offset: 0.6}),
         style({ transform: 'translate(400px,0px)',     offset: 0.8}),
        style({ transform: 'translate(500px,0px)',     offset: 1.0})
      ]))
    ]),
    transition('state2=>state1', [
      animate('3s', keyframes([
       style({ transform: 'translate(500px,0px)', offset: 0}),
       style({ transform: 'translate(400px,0px)',  offset: 0.4}),
       style({ transform: 'translate(300px,0px)',     offset: 0.6}),
       style({ transform: 'translate(200px,0px)',     offset: 0.8}),
       style({ transform: 'translate(100px,0px)',     offset: 1.0})
      ]))
    ])
  ])
]

})
export class AppComponent { 

    date1 = new Date(2016, 9, 28); 
    state: string = 'state1';

    toggle2() {
        this.state = (this.state === 'state1' ? 'state2' : 'state1');
    }

}