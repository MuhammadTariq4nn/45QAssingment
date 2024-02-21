var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["Istunmbol", "Banff National Park", "Makkah", "newyork"];
console.log("Original Order:");
console.log(placesToVisit.join(", "));
console.log("Alphabetical Order:");
console.log(__spreadArray([], placesToVisit, true).sort().join(", "));
console.log("original Order (not modified):");
console.log(placesToVisit.join(", "));
console.log("reverse alphabetical Order");
console.log(placesToVisit.reverse().sort().join(", "));
console.log("Still in original Order :");
console.log(placesToVisit.join(", "));
console.log("reverse Order");
console.log(placesToVisit.reverse().join(", "));
console.log(" Backm to its Original order");
var rev = placesToVisit.reverse();
console.log("\n ");
console.log(rev.join(", "));
var againRev = rev.reverse().join(", ");
