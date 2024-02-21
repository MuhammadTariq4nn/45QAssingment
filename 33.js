//33. ordinal number
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
numbers.forEach(function (num) {
    if (num === 1) {
        console.log("".concat(num, "st"));
    }
    if (num === 2) {
        console.log("".concat(num, "nd"));
    }
    if (num === 3) {
        console.log("".concat(num, "rd"));
    }
    if (num > 3) {
        console.log("".concat(num, "th"));
    }
});
