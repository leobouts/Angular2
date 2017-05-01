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
var customer_service_1 = require('./customer.service');
var AppComponent = (function () {
    function AppComponent(customerService) {
        this.customerService = customerService;
    }
    AppComponent.prototype.getCustomers = function () {
        var _this = this;
        this.customerService.getCustomers().then(function (customers) { return _this.customers = customers; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getCustomers();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: " \n<h2>Angular 2 services</h2>\n   \n<table >\n<tr>\n<th>First name</th>\n<th> Last name</th>\n<th> email</th>\n</tr>\n<tr *ngFor=\"let c of customers\">\n<td>{{c.first_name}}</td>\n<td> {{c.last_name}}</td>\n<td> {{c.email}}</td>\n</tr>\n</table>\n  ",
            providers: [customer_service_1.CustomerService],
            styles: ["\n    \n   \ntable {\n    border-collapse: collapse;\n    width: 100%;\n    color:red;\n    border: 1px solid black;\n}\n\nth, td {\n    text-align: left;\n    padding: 8px;\n    border: 1px solid black;\n}\ntr:nth-child(even){background-color: #f2f2f2}\ntr:hover {background-color: #9fbbdd}     \n  "]
        }), 
        __metadata('design:paramtypes', [customer_service_1.CustomerService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=app.component.js.map