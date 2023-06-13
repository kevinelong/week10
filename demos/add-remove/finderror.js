const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        console.log(this);
        return this.firstName +' ' + this.lastName;
    }
}
// const getFullname = person.fullName;

// console.log(getFullname())

console.log(person.fullName())

