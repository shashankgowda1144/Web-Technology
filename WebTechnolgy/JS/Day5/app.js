//Clousers in JS
let m=100
function outer(a,b){
    let c = 30

    function inner(x,y){
        let z=30
        console.log(a,b,c)
        console.log(x,y,z);
        console.log(m)
    }
    inner(100,200)
}
outer(10,20)


//Hoisting

console.log(x);  //undefined
var x=10
console.log(x);  //10

console.log(y);  //error can not access
let y=20
console.log(y); //20




