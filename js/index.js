function greet(customerOne, customerTwo) {
    console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}!`);
}

let sally = { name: 'Sally' };

greet.call(sally);
// my name is Sally, hi!

greet.apply(sally);
// my name is Sally, hi!
