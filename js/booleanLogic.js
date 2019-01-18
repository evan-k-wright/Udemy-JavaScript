/**********************
 * Boolean logic
 */

 var firstName = 'John';
 var age = '16';

 if (age < 13) {
     console.log(firstName + ' is a boy.');
 } else if (age >= 13 && age  < 20 ) { //between 13 and 20 >= 13 AND (&&) < 20
    console.log(firstName + ' is a teenager.');
 } else { 
     console.log(firstName + ' is a man.');
 }