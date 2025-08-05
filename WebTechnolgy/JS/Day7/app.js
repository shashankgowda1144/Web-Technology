// Creation of Array
//1st one
let arr = [10,20,30,40]
console.log(arr);

console.log(arr.length);
console.log(arr.length-1);
console.log(arr[2]);
console.log("------------");

                                            //2nd one
let arr1 = new Array()
let arr2 = new Array(4)
let arr3 = new Array(5).fill

console.log(arr1);
console.log(arr2);
console.log(arr3);

                                            //for- loop
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);   
}
console.log("----------------");

                                            //for-of loop
for(let el of arr){
    console.log(el);
}
console.log("---------------");

                                            //for-in loop
for(let k in arr){
    console.log(k,arr[k]);
    
}


let ar=[10,20,30,40]                         //push
let rs1=ar.push(100)
console.log(rs1)
console.log(ar)

let ar2 =[7,9,12,16]                         //pop
let res2=ar2.pop()
console.log(res2)
console.log(ar2)

let ar3 =[5,7,9,16,17]                      //shift
let res3=ar3.shift()
console.log(res3)
console.log(ar3)

let ar4 =[5,7,9,16,17]                     //unshift
let res4=ar4.unshift(100)
console.log(res4)
console.log(ar4)

let ar5 =[7,9,3,12,16,17,15]               //splice(removing elements)
let res5=ar5.splice(1,3)
console.log(res5)
console.log(ar5)

let ar6 =[7,9,3,12,16,17,15]               //splice(removing and adding another elements)
let res6=ar6.splice(2,2,10,20,30)
console.log(res6)
console.log(ar6)

let ar7 =[7,9,3,12,16,17,15]               //splice(adding elements)
let res7=ar7.splice(3,0,100,200,300)
console.log(res7)
console.log(ar7)


let ar8 =[1,2,3,4]                         //reverse
let res8=ar8.reverse()
console.log(res8)
console.log(ar8)

let ar9 =[1,2,3,4]                       //include element returns true or false
console.log(ar9.includes(2))
console.log(ar9.includes(7))


let ar10 =[1,2,2,3,4,2,7]                  //indexof(ele)
console.log(ar10.indexOf(2))
console.log(ar10.indexOf(10))


let ar11 =[1,2,2,3,4,2,7]                  //lastindexof(ele)
console.log(ar11.lastIndexOf(2))
console.log(ar11.lastIndexOf(1))
console.log(ar11.lastIndexOf(10))

let ar12=[10,20,30,40,50,60]                //slice
console.log(ar12.slice(1,4))
console.log(ar12.slice(2,5))
console.log(ar12.slice(3))
console.log(ar12.slice(2,2))
console.log(ar12.slice(3,10))