'use strict';
const names = ['John', 'Paul', 'Jones'];



let output = "";
for (let i = 0; i < names.length; i++) {
  output += "<li>" + names[i] + "</li>";
}


document.getElementById("target").innerHTML = output;
