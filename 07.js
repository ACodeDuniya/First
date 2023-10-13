var itemList = document.querySelector('#items');
// 1. parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='grey';
// console.log(itemList.parentElement.parentElement.parentElement);


// 2.lastelementchild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent="Hello";

// 3. lastchild
// console.log(itemList.lastChild);

// 4.createchild
// createchild: There is no built-in "createchild" method in JavaScript. If you want to create a new child element, you should use createElement and appendChild.

// 5. firstelementchild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent="Hello";


// 6. firstchild
// console.log(itemList.firstChild);

// 7.nextsibling
// console.log(itemList.nextSibling);

// // 8.nextelementsibling
// console.log(itemlist.nextELementSibling);

// 9. previoussibling
// console.log(itemList.previousSibling);

// 10. previouselementsibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='green';

// 11. createelement
    // create a div
// var newDiv = document.createElement("div");
// console.log(newDiv);
//     // add class
// newDiv.className="Hello";
//     // add id
// newDiv.id = "hello1";

// // 12. setAttribute
// newDiv.setAttribute("title","hello div");


// // 13.createtextnode
// var newDivText = document.createTextNode("Hello World");


// // 14.appendchild
// newDiv.appendChild(newDivText);


// assignment-1
// Now go head and add HEllo world before Item Lister

// creating a new Element which is a div and div is a block element also.
var newValue = document.createElement("div");
// now adding or giving text inside div.
var newValueText = document.createTextNode("Hello World");
// finally appending the text into the div container.
newValue.appendChild(newValueText);

// making a container and taking the container which is class of the header.
var container = document.querySelector('header .container');
// taking h1 from header also.
var h1 = document.querySelector('header h1');

// insertBefore takes 2 parameters 1st is what to you want  to insert and 2nd is from which you wanted to insert before.
container.insertBefore(newValue,h1);




// assignment-2
// Now go head and add HEllo world before Item 1
// Select the first list item (Item 1)
var hello = document.createElement("span");
var helloText = document.createTextNode("Hello World");
hello.appendChild(helloText);

var box = document.querySelector('div #items');
var l1 = document.querySelector('ul .list-group-item');

box.insertBefore(hello,l1);