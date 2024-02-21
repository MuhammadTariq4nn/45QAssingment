//15 removing one guest
let guests:string[]=["Sohail","aqib","zohaib","ali","imran"];
console.log(guests);
guests.pop();
guests.push("Shabir")
console.log("Guest List after removing Imran and add Shabir");
console.log(guests)

guests.forEach((guest,index)=>{
   console.log(`Dear ${guest},I would like to invite you on a dinner.`)
   });



   export{}