"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Customer.prototype.greeter = function () {
        console.log("Hello ".concat(this.firstName, " ").concat(this.lastName));
    };
    // Method to get the age
    Customer.prototype.GetAge = function () {
        console.log("Age of ".concat(this.firstName, " ").concat(this.lastName, " is ").concat(this.age));
        return this.age;
    };
    return Customer;
}());
exports.Customer = Customer;
