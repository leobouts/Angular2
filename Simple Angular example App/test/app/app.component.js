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
var core_1 = require('@Angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.field1 = 'salamia';
        this.field2 = 'kaseria';
        this.field3 = 'plhrwneis';
        this.p1f1 = '1';
        this.p1f2 = 'mpeikon';
        this.p1f3 = '7/kilo euro';
        this.p2f1 = '2';
        this.p2f2 = 'gouda';
        this.p2f3 = '8/kilo euro';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: " <h1> angular 2 test </h1>\n                <table>\n                    <tr>\n                        <th>{{field1}}</th>\n                        <th>{{field2}}</th>\n                        <th>{{field3}}</th>\n                    </tr>\n                    <tr>\n                        <td>{{p1f1}}</td>\n                        <td>{{p1f2}}</td>\n                        <td>{{p1f3}}</td>\n                    </tr>\n                    <tr>\n                        <td>{{p2f1}}</td>\n                        <td>{{p2f2}}</td>\n                        <td>{{p2f3}}</td>\n                    </tr>\n                </table>\n                "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map