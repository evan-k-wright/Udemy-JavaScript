/****************************
 * Variables and data types
 */

// var firstName = 'John';
// console.log(firstName)

// var lastName = 'Smith';
// var age = 28;

// var fullAge = true; 
// console.log(fullAge);

// var job;
// console.log(job)

// job = 'Teacher';
// console.log(job);


/*Variable names rules*/

//cannnot start a variabel with a number
//example: var 3years = 3

//cannnot start a variable wiht a symble except for an underscore _ and dollar sign $
//example: var #heavy = 'heavy' 

//cannot have a symbple in the middle of the variable name either
//example: var john&Mark = 'John and Mark'; 

//cannnot used reserved JavaScript keywords as variable names
//example: var function = 23;


/****************************
 * Variables mutation and type coercion 
 */

// var firstName = 'John';
// var age = 28;

// //Type coercion
// console.log(firstName + ' ' + age)

// var job, isMarried;
// job = 'teacher';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// //Variable mutation
// age = 'twenty eight';
// job = 'driver';
// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// var lastName = prompt('What is his last name?');
// console.log(firstName + ' ' + lastName);


/**************************
 * Basic Operators
 */

var year, yearJohn, yearMark;
now = 2018
ageJohn = 28;
ageMark = 33;

//Math operators 
yearJohn = now - ageJohn;
yearMark = now - ageMark;
console.log(yearJohn)

console.log(now + 2);
console.log(now * 2);
console.log(now / 10); 

//Logical oporators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder)

//Typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);






