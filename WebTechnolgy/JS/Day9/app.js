                            //Strings

let str = "welcome"
console.log(str[0]);   //w
console.log(str[str.length-1]); //e
console.log(str[10]);    // undefimed

console.log("hello" == "hello"); //true

let str1 = "Hello"
let str2 = "Welcome"

console.log(str1 + str2);
console.log(str1 +" "+ str2);

let a = 10
let b = 15
let sum = a+b

console.log("The sum of "+a+" and "+b+" is "+sum);
console.log(`The sum of ${a} and ${b} is ${sum}`);

for(let i=0; i<str.length; i++){
    console.log(str[i]);
}

console.log("============================");

for(let ch of str){
    console.log(ch);
}

console.log("===========================");

for(let idx in str){
    console.log(idx,str[idx]);
}

console.log("----------------------------------");


let strr = "myvlog"
console.log(strr.charAt(2));
console.log(strr.charCodeAt(3));

console.log(strr.toLowerCase());
console.log(strr.toUpperCase());

console.log(strr.slice(3,5));
console.log(strr.slice(2));
console.log(strr.slice(4,9));
console.log(strr.slice(-3));


console.log(strr.split(""));
console.log(strr.split("v"));
console.log(strr.split("l"));

let sentence = "The sky is Blue"
console.log(sentence);

let words = sentence.split(" ")
console.log(words);

let char = ["w", 'e', "l", "c", "o", "m", "e"]
console.log(char.join());
console.log(char.join(""));
console.log(words.join("-"));
console.log(words.join(" "));


