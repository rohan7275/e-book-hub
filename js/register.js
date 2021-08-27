var users = [
    {
        username: "codechaser",
        password: "abc-123"
    },
    {
        username: "astrra",
        password: "sjr-2351"
    }
]

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