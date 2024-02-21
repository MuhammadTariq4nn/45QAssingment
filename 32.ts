// 32: Checking user name
let current_users:string[]=['Tariq','Farooq','Zohaib','Wajahat', 'Ali']
let new_users:string[]=['shariq','Farooq','Aabis','Shabir', 'Ali']

console.log("These are the current users");
console.log(current_users);

console.log("These are the new users");
new_users.forEach((user)=>{
    console.log(user)
})

if(current_users===new_users){
    console.log('The list of users is same as before')
}else{
    let diff_users=current_users.filter((user)=>new_users.includes(user))
    console.log(`There are ${diff_users.length} Users are Already available. \nnamed: \n${diff_users}`)
}
