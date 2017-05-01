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
var AppComponent = (function () {
    function AppComponent() {
        this.first_name = 'Maria';
        this.last_name = 'Papadopoulou';
        this.id = 15;
    }
    AppComponent = __decorate([
        Component({
            selector: 'my-app',
            template: "h5 class=\"class2\">Angular 2 style 2 with class inside style></h5>\n     styles:['\n                .class2{\n                    background-color:#b30000;\n                    color:#4da6ff;\n                }\n    ']\n    <h1>Angular 2 class</h1>\n    <div>first name: {{ first_name }}</div>\n    <div>last name: {{ last_name }}</div>\n    <div>id: {{ id }}</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=typescript1.js.map