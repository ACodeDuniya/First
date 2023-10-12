// assignments:
// Make the 3 rd element in the list have green background color
// Make all the elements in the list have bold color font

var items = document.getElementsByClassName("list-group-item");

console.log(items);

// making the 3rd element in the list have green background color
items[2].style.backgroundColor = "green";

// making all the elements in the list have bold color font
for(var i=0;i<items.length;i++){
    items[i].style.fontWeight="bold"
}