//30. Hello Admin:
var userNames = ['Tariq', 'Farooq', 'Zohaib', 'Wajahat', 'Ali'];
userNames.forEach(function (user, index) {
    if (user === 'Tariq') {
        console.log("Hello Admin ".concat(user, ", wwould you like to see report?"));
    }
    if (user != 'Tariq') {
        console.log("Hello ".concat(user, " Thank you for logging again"));
    }
});
