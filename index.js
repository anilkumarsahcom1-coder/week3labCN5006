function EmployeeInfo(name,Salary)
{
console.log("Welcome " + name + " Your monthly Salary is " + Salary);

}
// Display currrent date and time
const currentDateTime = new Date();
console.log("This is my first program");
console.log("Program run on : " + currentDateTime.toLocaleString());

var EmpName = "Anil";
var EmpSalary = 50000; 

//Calling the function
EmployeeInfo(EmpName, EmpSalary);
//Add this for Second Exercise
const EmpSkills= (skills,Name, LabGrp)=> {
console.log("Student ID " + Name + " Expert in " + skills)
console.log("Lab Group Name ", LabGrp)
}
EmpSkills("java", "3084943", "23")

// code for third exercise
const student= require( './StudentInfo')
const person = require( './Person')
//because getName is the function so we use()
console.log ("Student Name: " + student.getname())
console.log(student.Location)