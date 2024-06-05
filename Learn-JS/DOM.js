//        =====================DOCUMENT OBJECT MODEL==================

// WINDOW OBJECT 
// the window object represents an open window in a browser . it is browser's object 
//(not javaScript's) & is automatically created by browser
// it is global object with lots of properties & methods


//   -----------------> DOM <----------------
//when a web page is loaded , the browser creates a document object model of the page
console.log(window);
console.log(window.document);
window.alert("hello");
// if you want to print object we use console.dir()
console.dir(document.body);
console.dir(document.head);
//           ,-------------------DOM MANIPULATION-------------
let button = document.getElementById("btn");
console.dir(button);
let headings = document.getElementsByClassName("heading-class");
console.dir(headings);
console.log(headings);
let tag = document.getElementsByTagName("h1");
console.dir(tag);

//// query selector
let element = document.querySelector("p");
let elements = document.querySelectorAll("p");
let element1 = document.querySelectorAll(".heading-class");
let element2 = document.querySelectorAll("#btn");
console.dir(element);
console.dir(elements);
console.dir(element1);
console.log(element2);
//---------------------> properties <----------------------
// 1. tagName : returns tag for element nodes
// 2. innerHTML : returns the plain text or HTML content in the elements
// 3. innerText : returns the text content of the element and all its childern
// 4. textContent : returns textual content even for hidden element

//            TARGETING METHODS 
let elem = document;
console.log(elem);

let elem2 = document.all;
console.log(elem2);

// we use all, head, documentElement, head, title, body, images, anchors, links
// forms, doctype, URL, baseURI, domain

//             GET AND SET VALUE METHODS




