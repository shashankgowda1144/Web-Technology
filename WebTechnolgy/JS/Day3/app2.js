//While and Do- while loop

// let num=0

// // while(num>0){
// //     let rem=num%10;
// //     console.log(rem);
// //     num = parseInt(num/10)
// // }

// let num=123;
// let sum=0;

// do{
//     let rem=num%10;
//     sum=sum+rem;
//     num=parseInt(num/10)
// }while(num>0);

// console.log("the sum of digits is "+ sum);


let num = 435;
let rev = 0;

do{
    let rem = num%10;
    rev = rev*10+rem;
    num = parseInt(num/10);
}while(num>0);
    console.log(rev);
    