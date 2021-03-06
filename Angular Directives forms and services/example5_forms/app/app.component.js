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
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.onSubmit = function (f) {
        console.log(f.value);
        console.log(f.valid);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" novalidate>\n      <input name=\"first_name\" ngModel minlength=\"5\"  #first_name=\"ngModel\" placeholder=\"George\"> <br>\n      <input name=\"last_name\" ngModel maxlength=\"10\" required  #last_name=\"ngModel\" placeholder=\"Papagiannis\"> <br>\n      <input name=\"nickname\" ngModel  pattern=\"[A-Za-z]{5}\"   #email=\"ngModel\" placeholder=\"Papagiannis@drmail.com\"> <br>\n      <button type=\"submit\">Submit</button>\n    </form>\n    <p>First name {{ first_name.value }}</p>\n    <p>last name  {{ last_name.value }}</p>\n    <p>email  valid: {{ email.valid }}</p>\n    <p>First name valid: {{ first_name.valid }}</p>\n    <p>Form valid: {{ f.valid }}</p>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map