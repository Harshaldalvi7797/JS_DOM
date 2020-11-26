/** @format */

//Examine the document object
//console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all[0]);
// document.all[10].textContent = "Hello";
// console.log(document.forms);
// console.log(document.links)
//console.log(document.images);

//GET ELEMENTS BY ID
// console.log(document.getElementById("header-title"));
// var headerTitle = document.getElementById("header-title");
// var nav = document.getElementById("navbar");
// console.log(headerTitle);

// headerTitle.textContent = "Hello";
// headerTitle.innerText = "<h3>Good Bye</h3>";

// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[0]);
// headerTitle.style.borderBottom = "solid 3px #000";
// nav.style.borderBottom = "solid 30px #000";


//class
var con = document.getElementsByClassName("list-group-item");
console.log(con);
console.log(con[1]);
con[1].textContent = "hello jjj";
con[1].style.fontWeight = "bold";
con[1].style.backgroundColor = "yellow";
for (var i = 0; i <= con.length; i++) {
  con[i].style.backgroundColor = "#f4f4f4";
}
