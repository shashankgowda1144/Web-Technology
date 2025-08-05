let employees = [
  { name: "Alice", age: 30, salary: 50000 },
  { name: "Bob", age: 25, salary: 45000 },
  { name: "Charlie", age: 35, salary: 60000 },
  { name: "David", age: 28, salary: 48000 },
  { name: "Eve", age: 32, salary: 52000 }
]

let filteredEmployees = [...employees]

function displayData(data) {
  const tbody = document.getElementById("tbody")
  tbody.innerHTML = ""

  data.forEach((emp, index) => {
    tbody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${emp.name}</td>
        <td>${emp.age}</td>
        <td>${emp.salary}</td>
        <td><button onclick="deleteEmployee(${index})">Delete</button></td>
      </tr>`
  })

  updateTotalSalary(data)
}

function updateTotalSalary(data) {
  let total_salary = data.reduce((sum, emp) => sum + emp.salary, 0)
  const tfoot = document.getElementById("tfoot")
  tfoot.innerHTML = `
    <tr>
      <td colspan="4"><strong>Total Salary</strong></td>
      <td><strong>${total_salary}</strong></td>
    </tr>`
}

document.getElementById("display_btn").addEventListener("click", () => {
  filteredEmployees = [...employees]
  document.getElementById("search_input").value = ""
  displayData(filteredEmployees)
})

function deleteEmployee(index) {
  const removed = filteredEmployees[index]
  const originalIndex = employees.findIndex(emp => emp.name === removed.name && emp.age === removed.age && emp.salary === removed.salary)
  if (originalIndex !== -1) {
    employees.splice(originalIndex, 1)
  }
  filteredEmployees.splice(index, 1)
  displayData(filteredEmployees)
}

function searchByName() {
  const query = document.getElementById("search_input").value.toLowerCase()
  filteredEmployees = employees.filter(emp => emp.name.toLowerCase().includes(query))
  displayData(filteredEmployees)
}

function ascendingBySalary() {
  filteredEmployees.sort((a, b) => a.salary - b.salary)
  displayData(filteredEmployees)
}

function descendingBySalary() {
  filteredEmployees.sort((a, b) => b.salary - a.salary)
  displayData(filteredEmployees)
}

function ascendingByAge() {
  filteredEmployees.sort((a, b) => a.age - b.age)
  displayData(filteredEmployees)
}

function descendingByAge() {
  filteredEmployees.sort((a, b) => b.age - a.age)
  displayData(filteredEmployees)
}

function nameAscending() {
  filteredEmployees.sort((a, b) => a.name.localeCompare(b.name))
  displayData(filteredEmployees)
}

function nameDescending() {
  filteredEmployees.sort((a, b) => b.name.localeCompare(a.name))
  displayData(filteredEmployees)
}
