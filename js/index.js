firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("login.html")
    
    }else{
        document.getElementById("user").innerHTML = "Hello, "+user.email;
    }
})


function logout(){
    firebase.auth().signOut()
    alert("User loged out");
}
