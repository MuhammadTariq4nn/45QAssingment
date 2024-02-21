// 32: Checking user name
var current_users = ['Tariq', 'Farooq', 'Zohaib', 'Wajahat', 'Ali'];
var new_users = ['shariq', 'Farooq', 'Aabis', 'Shabir', 'Ali'];
console.log("These are the current users");
console.log(current_users);
console.log("These are the new users");
new_users.forEach(function (user) {
    console.log(user);
});
if (current_users === new_users) {
    console.log('The list of users is same as before');
}
else {
    var diff_users = current_users.filter(function (user) { return new_users.includes(user); });
    console.log("There are ".concat(diff_users.length, " Users are available. \nnamed: \n").concat(diff_users));
}
