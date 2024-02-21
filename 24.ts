//  24  condition tests


//Tests for equality and inequality with strings
let str1: string = "hello";
let str2: string = "world";

console.log(str1===str2);
console.log(str1!==str2);

//Tests using the lower case function
let name:string="Tariq"
console.log(name===name.toLowerCase);

//Numerical tests involving equality and inequality, greater than and less than, 
//greater than or equal to, and less than or equal to
console.log(5 > 10);
console.log(5 < 10);
console.log(5 != 5);
console.log(3*5===9);
console.log(2<=10);


//Tests using "and" and "or" operators

let x:number=5;
let y:number=12
console.log(x>7&&y<10)
let val1: string = "hello";
let val2: string = "world";
console.log(val1 === "hello" || val2 ==="hello");


//Test whether an item is in a array
let item:string= "apple";
let arr:string[]=["apple","Banana"]
console.log(item===arr)

let item1:string= "apple";
let arr1:string[]=["apple","Banana"]
console.log(item!=arr);

export{}