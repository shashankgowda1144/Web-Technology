let arr = [1,2,3,4,5]

function Employee(name,age,salary){
    this.name = name
    this.age = age
    this.salary = salary
}

let employees = [
    new Employee("xyz",20,5000),
    new Employee("abc",25,2500),
    new Employee("mno",22,4000)
]

let res2 = employees.map(ele => ele.name)
console.log(res2);

let res3 = arr.filter(ele => ele%2==0)
console.log(res3);

let res4 = arr.filter(ele => ele%2!==0)
console.log(res4);

let res5 = arr.filter(ele => ele>5)
console.log(res5);

let res6 = employees.filter(ele => ele.salary > 3000)
console.log(res6);

let marks = [2,1,3,7,0,8,5]
marks.sort((a,b) => a-b)
console.log(marks);         //[0, 1, 2, 3, 5, 7, 8]

marks.sort((a,b) => b-a)
console.log(marks);         //[8, 7, 5, 3, 2, 1, 0]

employees.sort((a,b) => a.salary-b.salary)

employees.sort((a,b) => a.age-b.age)

employees.sort((a,b) => {
    if(a.name > b.name){
        return 1
    }else{
        return -1
    }
})
console.log(employees);

let words = ["nanu","ninu","mathu","raju"]
words.sort((a,b) =>{
    if(a>b)
        return 1
    else
        return -1
})
console.log(words);