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
    function AppComponent() {
    }
    AppComponent.prototype.onSubmit = function (f) {
        console.log(f.value);
        console.log(f.valid);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" novalidate>\n      <input name=\"onoma\" ngModel minlength=\"5\"  #onoma=\"ngModel\" placeholder=\"Kostas\"> <br>\n      <input name=\"epitheto\" ngModel maxlength=\"10\" required  #epitheto=\"ngModel\" placeholder=\"Papadopoulos\"> <br>\n      <input name=\"dieuthinsi\" ngModel maxlength=\"20\"   #dieuthinsi=\"ngModel\" placeholder=\"venizelou 3\"> <br>\n      <input name=\"tilefono\" ngModel  pattern=\"[0-9]{10}\" maxlength=\"10\"  #tilefono=\"ngModel\" placeholder=\"6912345678\"> <br>\n      <button type=\"submit\">Submit</button>\n    </form>\n    <p>First name {{ onoma.value }}</p>\n    <p>last name  {{ epitheto.value }}</p>\n    <p>adress (optional)  {{ dieuthinsi.value }}</p>\n    <p>tilefono  valid: {{ tilefono.valid }}</p>\n    <p>last name  {{ epitheto.value }}</p>\n    <p>First name valid: {{ onoma.valid }}</p>\n    <p>Form valid: {{ f.valid }}</p>\n\n    <h2>Angular 2 services</h2>\n    <table >\n    <tr>\n    <th>First name</th>\n    <th> Last name</th>\n    <th> Phone number</th>\n    </tr>\n    <tr *ngFor=\"let c of customers\">\n    <td>{{c.onoma}}</td>\n    <td> {{c.epitheto}}</td>\n    <td> {{c.tilefono}}</td>\n    </tr>\n    </table>\n  ",
            providers: [customer_service_1.CustomerService],
            styles: ["\n    \n   \ntable {\n    border-collapse: collapse;\n    width: 100%;\n    color:red;\n    border: 1px solid black;\n}\n\nth, td {\n    text-align: left;\n    padding: 8px;\n    border: 1px solid black;\n}\ntr:nth-child(even){background-color: #f2f2f2}\ntr:hover {background-color: #9fbbdd}     \n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var AppComponent1 = (function () {
    function AppComponent1(customerService) {
        this.customerService = customerService;
    }
    AppComponent1.prototype.getCustomers = function () {
        var _this = this;
        this.customerService.getCustomers().then(function (customers) { return _this.customers = customers; });
    };
    AppComponent1.prototype.ngOnInit = function () {
        this.getCustomers();
    };
    return AppComponent1;
}());
exports.AppComponent1 = AppComponent1;
//# sourceMappingURL=app.component.js.map