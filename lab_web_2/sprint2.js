
var number = prompt("Enter number: ");

var stars = stars(number);

if(palindrome){
    alert("Access Granted");
}else{alert("Access Denied");
      sprint1();}

function stars(x) {
  for (let i = 0; i < x; i++) {
   for (let j=x-1; j>i; j--) {
      document.write("&nbsp&nbsp"); 
   }
   for (let k=0; k<=(i*2); k++) {
      document.write("^"); 
   }
   document.write("<br>");
}
for (let i=0; i<2; i++) {
    for (let j=0; j<(x*2)-3; j++) {
        document.write("&nbsp");
    }
    document.write("^<br>");
}