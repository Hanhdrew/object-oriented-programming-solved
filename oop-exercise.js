/* Please read the instructions located in the exercises/2-oop-exercise-readme.md file and complete your code below */

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.grades = [];
  }
  addGrade(grade) {
    if (grade >= 0 && grade <= 100) {
      this.grades.push(grade);
    } else {
      console.log("Grade must be between 0 and 100.");
    }
  }
  calculateAverage() {
    if (this.grades.length === 0) {
      return 0;
    } else {
      let sum = this.grades.reduce((acc, curr) => {
        return (acc = acc + curr);
      }, 0);
      return sum / this.grades.length;
    }
  }
  hasPassed(passingGrade) {
    if (passingGrade <= this.calculateAverage()) {
      return true;
    } else {
      return false;
    }
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
}

class Course {}

const newStudent = new Student("andrew", 380);

newStudent.addGrade(40);
newStudent.addGrade(60);
newStudent.addGrade(70);

console.log(newStudent.hasPassed(30));
