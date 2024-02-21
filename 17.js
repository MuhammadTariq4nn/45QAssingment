//17
var guests = ["Sohail", "aqib", "zohaib", "ali", "imran"];
console.log("Number of Guests :".concat(guests));
console.log(" you can invite only two people for dinner from this list");
guests.pop();
console.log(" you\u2019re sorry you can\u2019t invite \"imran\" to dinner");
guests.pop();
console.log(" you\u2019re sorry you can\u2019t invite \"ali\" to dinner");
guests.pop();
console.log(" you\u2019re sorry you can\u2019t invite \"zohaib\" to dinner");
console.log(guests);
console.log("".concat(guests[0], " your are still invited"));
console.log("".concat(guests[1], " your are still invited"));
guests.pop();
guests.pop();
console.log("empty list ".concat(guests));
