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


var johnWeight = 99; //kg
var johnHight = 1.5; //meters

var markWeight = 79;
var markHight = 1.8;

var johnBMI = johnWeight / (johnHight * johnHight);
var markBMI = markWeight / (markHight * markHight);
console.log(johnBMI, markBMI)

var johnBMI = 44;
var markBMI = 24.4;

var markHigherBMI = markBMI > johnBMI;
console.log('Is Marks\'s BMK hight than Jons\'? ' + markHigherBMI);