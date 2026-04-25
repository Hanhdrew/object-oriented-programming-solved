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

class Course {
  constructor(title) {
    this.title = title;
    this.students = [];
  }
  enrollStudent(student) {
    this.students.push(student);
  }
  listStudents() {
    this.students.forEach((student) => {
      console.log(student.name);
    });
  }
  calculateCourseAverage() {
    if (this.students.length === 0) {
      return 0;
    } else {
      let averageGrade = [];
      this.students.forEach((student) => {
        averageGrade.push(student.calculateAverage());
      });
      let sum = averageGrade.reduce((acc, curr) => {
        return (acc = acc + curr);
      }, 0);
      return sum / averageGrade.length;
    }
  }
}

const anotherStudent = new Student("mike", 1);
const newStudent = new Student("andrew", 380);
const newCourse = new Course("Mathematics");

newStudent.addGrade(40);
newStudent.addGrade(60);
newStudent.addGrade(70);

newCourse.enrollStudent(newStudent);
newCourse.enrollStudent(anotherStudent);

// console.log(newCourse);
console.log(newCourse.calculateCourseAverage());
