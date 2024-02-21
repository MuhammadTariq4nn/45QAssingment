"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//15 removing one guest
var guests = ["Sohail", "aqib", "zohaib", "ali", "imran"];
console.log(guests);
guests.pop();
guests.push("Shabir");
console.log("Guest List after removing Imran and add Shabir");
console.log(guests);
guests.forEach(function (guest, index) {
    console.log("Dear ".concat(guest, ",I would like to invite you on a dinner."));
});
