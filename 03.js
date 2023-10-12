// examine the document object

// console.dir(document)

// console.log(document.domain);


// console.log(document.URL)


// console.log(document.title)

// // changing the title of the html page.

// // document.title = 123;

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);


// console.log(document.all[10]);
// // this will change the heading to hello,
// // but this is not the efficient way to do it.
// document.all[10].textContent="hello";


// console.log(document.forms);
// we can use indexing to find specifics items.
// console.log(document.links);

// Get Element by Id name
// console.log(document.getElementById('header-title'));
// or,
// var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);

// headerTitle.textContent="hello";
// headerTitle.innerText="Goodbye";
// headerTitle.innerHTML="<h1>hello</h1>"

// // check the difference between text content and inner text.

// var header = document.getElementById("main-header");
// header.style.borderBottom="solid 5px black"



// Assignment:-
// Now make ADD ITEM bold and chage the font color to greeen.

var assignment = document.getElementsByClassName('title');
console.log(assignment);

assignment[0].style.fontWeight = 'bold';
assignment[0].style.color = 'green';