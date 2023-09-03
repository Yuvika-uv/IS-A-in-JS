function Person(id, name, age, city) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.city = city;
}

function Student(id, name, age, city, marks, grade, college) {
    Person.call(this, id, name, age, city);

    this.marks = marks;
    this.grade = grade;
    this.college = college;
}

function Employee(id, name, age, city, salary, bonus, companyName) {
    Person.call(this, id, name, age, city);

    this.salary = salary;
    this.bonus = bonus;
    this.companyName = companyName;
}

Student.prototype = Object.create(Person.prototype);
Employee.prototype = Object.create(Person.prototype);

Person.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name}.`);
};

const person = new Person(1, 'John', 30, 'New York');
const student = new Student(2, 'Alice', 22, 'Los Angeles', 95, 'A', 'ABC College');
const employee = new Employee(3, 'Bob', 35, 'San Francisco', 60000, 5000, 'XYZ Inc.');

person.sayHello();  // Output: Hello, my name is John.
console.log(student);  // Display student details
console.log(employee);  // Display employee details
