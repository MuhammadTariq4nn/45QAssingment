//31: no user
var userNames = ['Tariq', 'Farooq', 'Zohaib', 'Wajahat', 'Ali'];
if (userNames.length === 0) {
    console.log(" We need to find some users!");
}
else {
    userNames.forEach(function (user) {
        console.log("Hello ".concat(user));
    });
}
userNames = [];
console.log(userNames);
