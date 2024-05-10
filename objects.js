let students = {
    name: "Shrishty",
    age: 56,
    gender: "Female",
    phone: "763638633",
    getDetails: function (){console.log(this.name, this.age, this.gender, this.phone);}
}


let student1 = new students()

// console.log(typeof students);

console.log(students.phone, students.age);
console.log(students.name);

students.getDetails()