/*************************
 * If / else statements
 */

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true 
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}


var johnMass = 99; //kg
var johnHight = 1.5; //meters

var markMass = 79;
var markHight = 1.8;

var johnBMI = johnMass / (johnHight * johnHight);
var markBMI = markMass / (markHight * markHight);

if (markBMI > johnBMI) {
    console.log('Mark\'s BMI is hight than John\'s')
} else { 
    console.log('John\'s BMI is hight than Mark\'s')
}
