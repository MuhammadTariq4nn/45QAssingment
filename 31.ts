//31: no user

let userNames:string[]=['Tariq','Farooq','Zohaib','Wajahat', 'Ali'];

if(userNames.length===0){
    console.log(" We need to find some users!")
}else{
  userNames.forEach((user)=>{
    console.log(`Hello ${user}`)
  })
}

userNames=[];
console.log(userNames);