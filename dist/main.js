"use strict";
let user = ["Fuad", 23, true, "Azkia"];
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 12;
    }
    return income * 1.3;
}
calculateTax(10000);
let student = {
    id: 1,
    name: "Fuad Azkia",
    retire: (date) => {
        console.log(date);
    }
};
let textBox = {
    drag: () => { },
    resize: () => { }
};
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hola!");
}
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday.getFullYear());
//# sourceMappingURL=main.js.map