console.log("js is here")
let value;
document.getElementById("btn1").onclick =function(){
   console.log("button presses")
   value =document.getElementById("inp").value
   console.log(value)
   document.getElementById("heading").innerHTML =value
