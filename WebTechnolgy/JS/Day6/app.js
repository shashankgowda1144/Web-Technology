// Objects

let employee = {
    name : "ABC",
    age : 23,
    salary : 2000
};
console.log(employee.salary);  //2000

function Student(name,age,id){
    this.name = name
    this.age = age
    this.id = id
    name = name
};

let std1 = new Student("A",25,101);
let std2 = new Student("B",35,102);

console.log(std1);

class Car{
    constructor(name,price,color){
        this.name = name
        this.price = price
        this.color = color
    }
}

let car1 = new Car("BMW",101010,"red");
let car2 = new Car("Audi",200202,"Green");

console.log(car2);


let student = {
    name : "Abhi",
    age : 22,
    id : 1001,
    address : {
        city : "Banglore",
        state : "Karanataka",
        pincode : 560078
    },
    printDetails : function(){
        console.log(this.name,this.age,this.address.city);
        
    }
}

// console.log(student.name);  //Abhi
// console.log(student["name"]);  //Abhi
// console.log(student.age); //22
// student.age=30;
// console.log(student.age);  //30
// // console.log(student.totalMarks);
// student.totalMarks = 100;
// console.log(student.totalMarks);
// console.log(student.id);  //1001
// delete student.id;
// console.log(student.id);  //undefined
// console.log(student);

let keys = Object.keys(student)
console.log(keys);   //[key1,key2,key3....]
let addressKeys = Object.keys(student.address)
console.log(addressKeys);

let values = Object.values(student)
console.log(values);  //[val1,val2,val3..]
let valuesofAddress = Object.values(student.address)
console.log(valuesofAddress);

let entries = Object.entries(student)
console.log(entries);  //[key1,value1],[key2,value2],[key3,value3]...]
console.log(Object.entries(student.address));