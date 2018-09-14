
var name = prompt("Enter name: ");

var palindrome = palindrome(name);

if(palindrome){
    alert("Access Granted");
}else{alert("Access Denied");
      sprint1();}

function palindrome(str) {
    var length = str.length;
    for(var i =0; i< length/2;i++){
        if(str.charAt(i)!=str.charAt(length-1-i)){
            return false;
        }
    }
    return true;
}