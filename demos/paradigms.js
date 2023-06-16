// PARADIGMS (Models or Frameworks of Thought)
// Three primary paradigms plus a bonus

// 1.  Imperative (The classic and most common; one line after another)
// 1b. Procedural/Structured (Organizing with functions and modules)

// 2. Functional (Less known and practiced but growing influence)
//    We get .map() .filter() and .reduce() from this world.
//    No side effects (same input always yields same output). Pure.
//    More expressive? More ideas in fewer lines of code.

// 3. Object Oriented (Misunderstood, very popular, contreversial).
//    Models real-world problems using the language of the problem.
//    Java, C++ or C#, culture of rigid. 

// 4. BONUS Hybrid of all in scripting languages like JS and Python
//    Whatever it takes to get stuff done. Easy and Quick.
//    Easy to have run-time errors especially due to no enforcement 
//    of data types. Both javascript/typescript and python now allow 
//    optional enforcement of types.

// EXAMPLE: Write a program that stores first and last names and can
//          print them out both "first last" or "last, first".

//DATA
const list = [
    { first: "Kevin", last: "Long" },
    { first: "Martin", last: "King" }
];
let mode = "reverse"; // "standard" or "reverse"

//SOLUTIONS:

// 1. Procedural
for (let i = 0; i < list.length; i++) {
    const person = list[i];
    if (mode === "standard") {
        console.log(person.first + " " + person.last);
    } else {
        console.log(person.last + ", " + person.first);
    }
}
//8 lines

// 2. Functional
const standard = p => `${p.first} ${p.last}`;
const reverse = p => `${p.last}, ${p.first}`;
console.log(list.map(mode === "standard" ? standard : reverse).join("\n"));
// 3 lines

// 3. OOP (Object Oriented Programming)
class Person {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    standard() {
        return `${this.first} ${this.last}`
    }
    reverse() {
        return `${this.last}, ${this.first}`
    }
}
const people = list.map(p => new Person(p.first, p.last));
for (let i = 0; i < people.length; i++) {
    const person = people[i];
    if (mode === "standard") {
        console.log(person.standard())
    } else {
        console.log(person.reverse())
    }
}
//19 lines

// Hybrid (without for) is 7 lines shorter so 12?
console.log(list.map(p => new Person(p.first, p.last)).map(p => mode === "standard" ? p.standard() : p.reverse()).join("\n"));
// 127 characters?

// HOW TESTABLE IS EACH?
// HOW EASY TO:
//      RE_USE?
//      COLLABORATE ON?
//      READ?
//      WRITE?
//
// DOES WHICH IS BETTER DEPEND ON THE SCALE OF THE PROBLEM AND THE COMPOSITION OF YOUR TEAM?