class Employee {
    id;
    name;
    sal;
    constructor(a, b, c) {
        console.log("Constructor Executing Automatically");
        this.id = a;
        this.name = b;
        this.sal = c;
    }
}
let e1 = new Employee(101, "Rahul Gandhi", 45000);
console.log(e1);
let e2 = new Employee(102, "Sonia Gandhi", 65000);
console.log(e2);