document.getElementById("loginForm").addEventListener("submit",(event)=>{
  event.preventDefault()
})


firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    alert("user loged in");
      location.replace("https://getbootstrap.com/docs/5.0/getting-started/introduction/")
  }
})

function login(){
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value
  firebase.auth().signInWithEmailAndPassword(email, password)
  .catch((error)=>{
      document.getElementById("error").innerHTML = error.message
  })
}

function signUp(){
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .catch((error) => {
      document.getElementById("error").innerHTML = error.message
  });
  alert("new account created,now you can login");
}

function forgotPass(){
  const email = document.getElementById("email").value
  firebase.auth().sendPasswordResetEmail(email)
  .then(() => {
      alert("Reset link sent to your email id")
  })
  .catch((error) => {
      document.getElementById("error").innerHTML = error.message
  });
}
