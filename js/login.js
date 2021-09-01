const fs = require("fs");

fs.readFile("./../data/users.csv", "r", (err, data)) {
    if (err) {
        throw err;
    }
    var users = data;
}

function checkInfo(username, password) {
    for (i in users) { if (users[i].username == username && users[i].password == password) { return true } }
    return false
}

function getInfo() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    if (checkInfo(username, password)) console.log("Welcome back, " + username + " !\n")
    else console.log("Incorrect username or password!\n")
}