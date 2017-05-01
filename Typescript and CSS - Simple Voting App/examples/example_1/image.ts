import { Component } from '@angular/core';
@Component({
    selector:'my-app',
    template:` 
    <div> 
    <img src="{{sr1}}" style="height:300px; border-style: ridge;border-color:grey;
    border-width:2px 10px 4px 20px;">
    </div>
    `
})
export class AppComponent{
        sr1='images/img1.jpg';
}