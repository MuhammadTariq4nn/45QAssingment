// 35:   animals
var animals = ["Dog", "rabbit", "Cat"];
for (var animal in animals) {
    console.log(animals[animal]);
}
for (var animal in animals) {
    console.log("A ".concat(animals[animal], "  would make a great pet"));
}
console.log("Any of these animal would make a gereat pet");
