"use strict";
// type Language={
//     name:string;
//}
Object.defineProperty(exports, "__esModule", { value: true });
function Languages() {
    return { language1: "Typecript", language2: "Javascript", language3: "Python" };
}
console.log(Languages.length);
console.log(Languages().language1);
console.log(Languages().language2);
console.log(Languages().language3);
