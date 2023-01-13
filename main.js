// 1
let contentDiv = document.getElementById("content");
let firstH3 = contentDiv.getElementsByTagName("h3")[0];
console.log(firstH3);

// 2
var titreNiv3 = document.getElementById("titreNiv3");
console.log(titreNiv3.innerHTML);

// 3
var titreNiv3 = document.getElementById("titreNiv3");
var previousElement = titreNiv3.previousElementSibling;
console.log(previousElement.innerHTML);

