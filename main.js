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


// 4
var petitParagraphe = document.getElementsByClassName("petitParagraphe")[0];
var nextElement = petitParagraphe.nextElementSibling;
console.log(nextElement.innerHTML);


// 5
var importantElements = document.getElementsByClassName("important");
for (var i = 0; i < importantElements.length; i++) {
    console.log(importantElements[i].parentElement);
}

// 6
var listElements = document.getElementById("listElements");
console.log(listElements.parentNode.firstChild);


// 7
var importantElements = document.getElementsByClassName("important");
var lastImportantElement = importantElements[importantElements.length - 1];
console.log(lastImportantElement.nextElementSibling);

