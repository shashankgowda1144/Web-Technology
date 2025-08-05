console.log(window);
console.log(document);
console.log(document.title);

let head = document.getElementById("head")
console.log(head);  //reference of the element
console.log(head.innerText);  //Heading
head.innerText = "welcome"

let paras = document.getElementsByClassName("para")
console.log(paras);
console.log(paras[0]);
console.log(paras[0].innerText);

let btn = document.getElementById("btn")
console.log(btn);

let btns = document.getElementsByTagName("button")
console.log(btns);
console.log(btns[1].innerText);

let para =document.querySelector(".para")
console.log(para);

let paragraph = document.querySelectorAll(".para")
console.log(paragraph);

let container = document.getElementById("container")
console.log(container);
// console.log(container.innerText);
// console.log(container.innerHTML);

let p =document.getElementById(".para")
console.log(p);

