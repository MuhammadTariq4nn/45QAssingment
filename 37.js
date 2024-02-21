//37 defalut parameter in Typescript
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The Shirt Size Is ".concat(size, " and the message is ").concat(message, " "));
}
make_shirt();
//2
function makeShirt(size, message) {
    if (size === void 0) { size = "Medium"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The Shirt Size Is ".concat(size, " and the message is ").concat(message, " "));
}
makeShirt("I Love programming");
