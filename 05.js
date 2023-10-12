// assignment
// Add a new li element without the same class Name
// And try editing it with getelementsbyclassname and then by getelementbytagname.


// var element = document.getElementsByTagName("li");
// console.log(element);

// // trying editing with tag name and making all the element items background color as grey.

// for(var i = 0 ; i < element.length; i++){
//     element[i].style.backgroundColor="grey";
// }
// in this we can see that the list item which we have added is also edited and its background color has changed to grey.


// now editing with using classname
var items= document.getElementsByClassName("list-group-item");
console.log(items);
for(var i = 0 ; i < items.length; i++){
    items[i].style.backgroundColor="grey";
}

// it is excluding the new list item which have defined and it is not changing its background color as the main reason is that we have no mentioned any class name for that particular list item so its neglecting it.
