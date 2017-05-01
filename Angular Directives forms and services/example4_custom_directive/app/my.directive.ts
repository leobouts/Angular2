import { Directive, ElementRef, Input, Renderer } from '@angular/core';
@Directive({ selector: '[myDirective]' })
export class Directive1 {
    constructor(el: ElementRef, renderer: Renderer) {
 renderer.setElementStyle(el.nativeElement, 'color', 'red');
 renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'green'); 
    }
}