"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guests = ["Sohail", "aqib", "zohaib", "ali", "imran"];
console.log(guests);
guests.unshift("Javed");
guests.splice(3, 0, "Arbab");
guests.push("Asbis");
console.log("after adding three more guest.");
~console.log(guests);
console.log("Hey I found a bigger dinner table");
//its from 16
console.log("Iam inviting ".concat(guests.length, " guests for dinner"));
