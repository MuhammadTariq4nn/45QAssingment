// // 42 great Magicians
var magician_names = ["Harry Houdini", "David Copperfield", "Penn Jillette"];
function great_magicians(magician_names) {
    magician_names.forEach(function (magician) {
        console.log("Great  ".concat(magician));
    });
}
great_magicians(magician_names);
