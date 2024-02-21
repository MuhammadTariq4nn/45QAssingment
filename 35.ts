// 35:   animals
let animals:string[]=["Dog","rabbit","Cat"];
for(let animal in animals){
    console.log(animals[animal])
}

for(let animal in animals){
    console.log(`A ${animals[animal]}  would make a great pet`);
}

console.log("Any of these animal would make a gereat pet")