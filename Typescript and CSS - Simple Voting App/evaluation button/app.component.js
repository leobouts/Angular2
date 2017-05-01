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
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.vote = 0;
        this.vote1 = 0;
        this.sum = 0;
    }
    AppComponent.prototype.voteUp = function () {
        this.vote += 1;
        ;
    };
    AppComponent.prototype.voteDown = function () {
        this.vote -= 1;
        ;
    };
    AppComponent.prototype.voteUp1 = function () {
        this.vote1 += 1;
        ;
    };
    AppComponent.prototype.voteDown1 = function () {
        this.vote1 -= 1;
        ;
    };
    AppComponent.prototype.add = function () {
        this.sum = this.vote + this.vote1;
        ;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<button class=\"b2\"(click)=\"voteUp()\">up</button>\n              <button class=\"b3\"(click)=\"voteDown()\">down</button>\n              <button class=\"b2\"(click)=\"voteUp1()\">up</button>\n              <button class=\"b3\"(click)=\"voteDown1()\">down</button>\n              <button class=\"b3\"(click)=\"add()\">add</button>\n              <button class=\"b3\" type=\"button\">{{vote}}</button>\n              <h4>{{'+'}}</h4>\n              <button class=\"b1\" type=\"button\">{{vote1}}</button>\n              <h4>{{'='}}</h4>\n              <button class=\"b1\" type=\"button\">{{sum}}</button>\n              <div/>"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map