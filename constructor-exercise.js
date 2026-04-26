/* Please read the instructions located in the 1-constructor-exercise-readme.md file and complete your code below */

class Book {
  constructor(title, author, year, genre) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
  }
  getSummary() {
    return `This Book's title is ${this.title}, written in ${this.year}, and is ${this.genre}`;
  }
  isClassic() {
    let currentYear = 2026;
    if (currentYear - this.year >= 50) {
      return true;
    }
    return false;
  }
  updateYear(newYear) {
    this.year += newYear;
    return `Publication year updated to ${newYear}`;
  }
  changeGenre(newGenre) {
    this.genre = newGenre;
    return `Genre updated to ${newGenre}`;
  }
}

const newBook = new Book("To kill a Mokingbird", "Harper Lee", 1960, "Fiction");

console.log(
  newBook.getSummary(),
  newBook.isClassic(),
  newBook.updateYear(1970),
  newBook.changeGenre("Horror"),
);
