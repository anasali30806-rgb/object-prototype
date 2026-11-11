// rivision Question Solve


//question 01


// function empolyee(name, salary) {

//     this.name = name
//     this.salary = salary

// }

// empolyee.prototype.showdetails =function(){

//     console.log(this.name);
//     console.log(this.salary);
// }

// let empolyee1 =new empolyee("Anas",70000);
// let empolyee2 =new empolyee("Ali",80000);


// empolyee1.showdetails();
// empolyee2.showdetails();




// =========================
// Assignment question solve
// =========================




// question 01



// Step 1: Constructor Function

// function Student(name, rollNumber, marks) {
//     this.name = name;
//     this.rollNumber = rollNumber;
//     this.marks = marks;
// }

// // Step 2: Add showDetails() to Prototype

// Student.prototype.showDetails = function() {
//     console.log(`Name: ${this.name}`);
//     console.log(`Roll Number: ${this.rollNumber}`);
//     console.log(`Marks: ${this.marks}`);
// };

// // Step 3: Add updateMarks() to Prototype

// Student.prototype.updateMarks = function(newMarks) {
//     this.marks = newMarks;
//     console.log(`${this.name}'s marks updated to ${this.marks}`);
// };

// // Step 4: Create 3 Student Objects

// let student1 = new Student("Anas", 101, 85);
// let student2 = new Student("Ali", 102, 90);
// let student3 = new Student("Ahmed", 103, 78);

// // Step 5: Display Student Details

// student1.showDetails();
// student2.showDetails();
// student3.showDetails();

// // Step 6: Update Marks

// student1.updateMarks(95);

// // Display Updated Marks

// student1.showDetails();

// // Step 7: Check Shared Methods

// console.log(
//     student1.showDetails === student2.showDetails
// );

// console.log(
//     student2.showDetails === student3.showDetails
// );




// question 02



// Constructor Function

// function Student(name, rollNumber, marks) {
//     this.name = name;
//     this.rollNumber = rollNumber;
//     this.marks = marks;
// }

// // Prototype Method

// Student.prototype.showDetails = function() {
//     console.log(`Name: ${this.name}`);
//     console.log(`Roll Number: ${this.rollNumber}`);
//     console.log(`Marks: ${this.marks}`);
// };

// // Create Student Objects

// let student1 = new Student("Anas", 101, 85);
// let student2 = new Student("Ali", 102, 90);
// let student3 = new Student("Ahmed", 103, 78);

// // Property Checking

// console.log("1:", "name" in student1);

// console.log("2:", "showDetails" in student1);

// console.log("3:", student1.hasOwnProperty("name"));

// console.log("4:", student1.hasOwnProperty("showDetails"));

// console.log("5:", typeof student1.showDetails);



// question 03




// Step 1: Constructor Function

// function Student(name, rollNumber, marks) {
//     this.name = name;
//     this.rollNumber = rollNumber;
//     this.marks = marks;
// }

// // Step 2: Prototype Methods

// Student.prototype.showDetails = function() {
//     console.log(this.name);
//     console.log(this.rollNumber);
//     console.log(this.marks);
// };

// // Step 3: Add Institute Property to Prototype

// Student.prototype.institute = "Saylani Mass IT Training";

// // Step 4: Create Three Student Objects

// let student1 = new Student("Anas", 101, 85);
// let student2 = new Student("Ali", 102, 90);
// let student3 = new Student("Ahmed", 103, 78);

// // Step 5: Access Institute Property

// console.log(student1.institute);
// console.log(student2.institute);
// console.log(student3.institute);

// // Step 6: Check Institute Property

// console.log("institute" in student1);
// console.log("institute" in student2);
// console.log("institute" in student3);

// // Step 7: Check Own Property

// console.log(student1.hasOwnProperty("institute"));

// // Step 8: Check Prototype

// console.log(Object.getPrototypeOf(student1));

// // Step 9: Compare Prototype

// console.log(
//     Object.getPrototypeOf(student1) === Student.prototype
// );
