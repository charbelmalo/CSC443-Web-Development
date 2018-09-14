function confirmation(){
var password = document.getElementById("pass1").value;
var password_confirmation = document.getElementById("pass2").value;
if(password.equals(password_confirmation))
    alert("Correct");
}
