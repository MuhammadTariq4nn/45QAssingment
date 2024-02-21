"use strict";
//43
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var magician_names = ["Harry Houdini", "David Copperfield", "Penn Jillette"];
function show_magicians(magician_names) {
    magician_names.forEach(function (magician) {
        console.log("".concat(magician));
    });
}
function great_magicians(magician_names) {
    magician_names.forEach(function (magician) {
        console.log("Great ".concat(magician));
    });
}
var copyOfmagacians = __spreadArray([], magician_names, true);
console.log("Orignal Magicians");
show_magicians(magician_names);
console.log("-------------------------");
console.log("Great magicians");
great_magicians(copyOfmagacians);
