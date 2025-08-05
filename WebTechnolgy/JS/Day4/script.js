
// function sum(a,b){
//     return a+b;
// }

// let res=sum(3,7);
// console.log(res);

let product=function(a,b){
    return a*b;
};

console.log(product);
console.log(product(4,6));

(function (name){
    console.log("Hello "+name);
})("Sanath");

(function mod(a,b){
    console.log(a%b); 
})(3,5);

//mod(8,2)

// let sum(a,b,c)=>a+b;
// console.log(sum(2,4,7));
// console.log((typeof sum));
// console.log(typeof NaN);

// let greet=name=>"Hello"+name;
// console.log(greet("san"));

function calculator(a,b,op){
    return op(5,2);
};

function add(x,y){
    return x+y
};

let res11=calculator(5,2,add);
console.log(res11);

let res12=calculator(5,2,function(x,y){
    return x-y
});
console.log(res12);

let pro=function(x,y){
    return x*y;
}

let res13=calculator(5,2,pro);
console.log(res13);

let res14=calculator(5,2,(a,b)=>a%b);
console.log(res14);



