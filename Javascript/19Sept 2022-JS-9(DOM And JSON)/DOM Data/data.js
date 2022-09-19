let employees = [{ id: 101, name: "Rahul Gandhi", salary: 45000 },
{ id: 102, name: "Sonia Gandhi", salary: 50000 },
{ id: 103, name: "Priyanka Gandhi", salary: 55000 },
{ id: 104, name: "Modi", salary: 70000 }]
function displayData() {
    let rows = ""
    for (employee of employees) {
        rows = rows + ` <tr> 
                            <td>${employee.id}</td>        
                            <td>${employee.name}</td>        
                            <td>${employee.salary}</td>        
                            </tr> `
    }
    document.getElementById('abc').innerHTML = rows;
}
