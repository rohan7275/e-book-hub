$(function() {
$('[data-toggle="tooltip"]').tooltip()
})
function redirect(){
    alert("clicking paypal");
    location.replace("https://www.paypal.com/in/signin");
}
function redirectnet(){
    alert("clicking netbanking");
    location.replace("https://retail.onlinesbi.com/retail/login.htm");
}
function confirm(){
    alert("Payment Confirmation is in process");
}