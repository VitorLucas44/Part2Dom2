// 1
// let contentDiv = document.getElementById("content");
// let firstH3 = contentDiv.getElementsByTagName("h3")[0];
// console.log(firstH3);


// // 2
// let titreNiv3 = document.getElementById("titreNiv3");
// console.log(titreNiv3.innerHTML);


// // 3
// let titreNiv3 = document.getElementById("titreNiv3");
// let previousElement = titreNiv3.previousElementSibling;
// console.log(previousElement.innerHTML);


// // 4
// let petitParagraphe = document.getElementsByClassName("petitParagraphe")[0];
// let nextElement = petitParagraphe.nextElementSibling;
// console.log(nextElement.innerHTML);


// // 5
// let importantElements = document.getElementsByClassName("important");
// for (var i = 0; i < importantElements.length; i++) {
//     console.log(importantElements[i].parentElement);
// }

// // 6
// let listElements = document.getElementById("listElements");
// console.log(listElements.parentNode.firstChild);


// // 7
// let importantElements = document.getElementsByClassName("important");
// let lastImportantElement = importantElements[importantElements.length - 1];
// console.log(lastImportantElement.nextElementSibling);


// // 8
// let textGeneral = document.getElementById("textGeneral");
// console.log(textGeneral.nextElementSibling.nextElementSibling);


// // 9
// let spanNom = document.querySelector("span:contains('Nom')");
// console.log(spanNom.parentNode.parentNode);

// 10
let bNicolas = document.querySelector("b:contains('Nicolas')");
console.log(bNicolas.previousElementSibling.previousElementSibling.firstChild.textContent);


// 11
document.querySelector('.grandParagraphe');


// 12
var listItems = document.querySelectorAll('li');
listItems.forEach(function(item) {
    console.log(item);
});  