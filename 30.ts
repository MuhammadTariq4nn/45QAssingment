//30. Hello Admin:

let userNames:string[]=['Tariq','Farooq','Zohaib','Wajahat', 'Ali']; 
userNames.forEach((user,index)=>{
  if(user==='Tariq'){
    console.log(`Hello Admin ${user}, wwould you like to see report?`);
  }
  if(user !='Tariq'){
    console.log(`Hello ${user} Thank you for logging again`,);
  }
})