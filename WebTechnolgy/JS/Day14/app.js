let btn1 = document.getElementById("btn1")

btn1.addEventListener("dblclick", ()=>{
    console.log("Hello world");
});

function changeColor(color){
    let head = document.getElementById("heading"); 
    head.style.color = "blue"
}
function changeColor(btn1){
    let head = document.getElementById("heading"); 
    head.style.color = "red"
}
function changeColor(color){
    let head = document.getElementById("heading"); 
    head.style.color = "green"
}
function changeColor(color){
    let head = document.getElementById("heading"); 
    head.style.color = "yellow"
}
let count = document.getElementById("count");

function increment(){
    count.innerText = Number(count.innerText) +1
}
function decrement(){
    count.innerText = Number(count.innerText) - 1
}

function hide(){
    let head = document.getElementById("head")
    head.style.visibility = "hidden"
}

function show(){
    let head = document.getElementById("head")
    head.style.visibility = "visible"
}