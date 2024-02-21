let placesToVisit: string[] = ["Istunmbol", "Banff National Park", "Makkah", "newyork"];
console.log("Original Order:");
console.log(placesToVisit.join(", "));

console.log("Alphabetical Order:");
console.log([...placesToVisit].sort().join(", "));


console.log("original Order (not modified):");
console.log(placesToVisit.join(", "));

console.log("reverse alphabetical Order");
console.log(placesToVisit.reverse().sort().join(", "));


console.log("Still in original Order :");
console.log(placesToVisit.join(", "));

console.log("reverse Order");
console.log(placesToVisit.reverse().join(", "));

console.log(" Backm to its Original order");
let rev=placesToVisit.reverse();
console.log("\n ");
console.log(rev.join(", "));
let againRev=rev.reverse().join(", ");
