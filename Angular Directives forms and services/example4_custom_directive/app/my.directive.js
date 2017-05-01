"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Directive1 = (function () {
    function Directive1(el, renderer) {
        renderer.setElementStyle(el.nativeElement, 'color', 'red');
        renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'green');
    }
    Directive1 = __decorate([
        core_1.Directive({ selector: '[myDirective]' }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], Directive1);
    return Directive1;
}());
exports.Directive1 = Directive1;
//# sourceMappingURL=my.directive.js.map