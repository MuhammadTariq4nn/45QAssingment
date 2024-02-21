//20
var programmingLanguages = ["C", "C++", "Java", "Javascript", "TypeScript", "Swift", "Ruby", "Go", "Rust"];
console.log("List of Programming Languages:");
programmingLanguages.forEach(function (language, index) {
    console.log("".concat(index + 1, "  - ").concat(language));
});
