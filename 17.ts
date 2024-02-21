//17

let guests:string[]=["Sohail","aqib","zohaib","ali","imran"];
console.log(`Number of Guests :${guests}`);
console.log(" you can invite only two people for dinner from this list");
guests.pop();
console.log(` you’re sorry you can’t invite "imran" to dinner`)
guests.pop();
console.log(` you’re sorry you can’t invite "ali" to dinner`)
guests.pop();
console.log(` you’re sorry you can’t invite "zohaib" to dinner`);
console.log(guests);
console.log(`${guests[0]} your are still invited`);
console.log(`${guests[1]} your are still invited`);
guests.pop();
guests.pop();
console.log(`empty list ${guests}`);
