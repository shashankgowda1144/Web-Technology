// Create and append <h1> to the body
let heading = document.createElement("h1");  
heading.innerText = "Hello World";           
heading.setAttribute("id", "head");
document.body.appendChild(heading);

// Get the container div
let cont = document.getElementById("container");

// Create and append <h2> to container
let h2 = document.createElement("h2");
h2.innerText = "This is h2 inside div";
h2.style.color = "blue";
cont.appendChild(h2);

// Create and append <p> to container
let p = document.createElement("p");
p.innerText = "This is a paragraph inside div";
cont.appendChild(p);                        
// Create and append <button> to container
let btn = document.createElement("button");
btn.innerText = "Click Me";                 
cont.appendChild(btn);


  // Create a list of technologies
 let technologies = ["html", "css", "js", "sql"];
 let list_cont = document.getElementById("list_cont");

        for (let ele of technologies) {
            let li = document.createElement("li");
            li.innerText = ele
            list_cont.appendChild(li)
        }

// Define the Employee constructor function
function Employee(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
}

// Create an array of employee objects
let employees = [
    new Employee("A", 23, 1345),
    new Employee("X", 25, 1200),
    new Employee("M", 22, 3000)
];

// Get the tbody element
let tbody = document.getElementById("tbody");

// Display employee data in table rows
for (let i = 0; i < employees.length; i++) {
    tbody.innerHTML += `
        <tr>
            <td>${i + 1}</td>
            <td>${employees[i].name}</td>
            <td>${employees[i].age}</td>
            <td>${employees[i].salary}</td>
        </tr>
    `;
}

// Calculate total salary
let total = 0;
for (let ele of employees) {
    total = total + ele.salary;
}

// Display total salary in tfoot
let tfoot = document.getElementById("tfoot");
tfoot.innerHTML = `
    <tr>
        <td colspan="3">Total salary</td>
        <td>${total}</td>
    </tr>
`;