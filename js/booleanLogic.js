/**********************
 * Boolean logic
 */

 var firstName = 'John';
 var age = '26';

 if (age < 13) {
     console.log(firstName + ' is a boy.');
 } else if (age >= 13 && age  < 20 ) { //between 13 and 20 >= 13 AND (&&) < 20
    console.log(firstName + ' is a teenager.');
 } else if(age >= 20 && age < 30) {
     console.log(firstName + ' is a young man.');
 } else { 
     console.log(firstName + ' is a man.');
 }


 

// var car = 'Mazda'
// var Mazda = 'red'

// if (car == "Mazda") {
//     console.log(car + ' goes outside.');
// } else { 
//     console.log(car + ' goes inside gradge.')
// } 
