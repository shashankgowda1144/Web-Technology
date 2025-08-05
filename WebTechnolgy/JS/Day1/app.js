console.log("Hello World");

document.writeln("<h2>Welcome<h2>");

x=confirm("Are you sure, you want to exit?");
console.log(x);

a=prompt("Enter the first number");
b=prompt("Enter the second number");

sum=a+b;
console.log(sum);

c=prompt("Enter the age");

if(c>=18){
    is_having_voterId=confirm("Do you have voter ID?");
    if(is_having_voterId){
        console.log("You can vote!!")
    }else{
        console.log("You cannot vote..")
    }
}
else{
    console.log("not eligible to vote");
}