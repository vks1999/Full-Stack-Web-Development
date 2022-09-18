// How to access array of objects item in Javascript

let employees = [
    {
        id: 101,
        name: "Rahul Gandhi",
        salary: 45000
    },
    {
        id: 102,
        name: "Sonia Gandhi",
        salary: 65000
    },
    {
        id: 103,
        name: "Rajeev Gandhi",
        salary: 10000
    }
]

console.log(employees);

for (i = 0; i < employees.length; i++) {
    console.log(employees[i].id);
    console.log(employees[i].name);
    console.log(employees[i].salary);
}