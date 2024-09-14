
var text = "there is some text"

var heading = document.getElementById("heading1");
var headings = document.getElementsByClassName("h2");
console.log(heading);
console.log(headings[1]);


var headingText = heading.innerText;
console.log(headingText);


heading.innerText = "world";

headings[1].innerText = text;

var userInp = prompt("enter your name");
var para = document.getElementById("p1");
para.innerText = userInp;

      
console.log(document.getElementById("h3").innerHTML);




var getSpan = document.getElementById("span1");




var getBody = document.getElementsByTagName("h1");
console.log(getBody[0])





