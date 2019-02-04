/*
    Basic Operators
*/

// var year, yearJohn, yearMark;
// now = 2018
// ageJohn = 28;
// ageMark = 33;

// //Math operators 
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;
// console.log(yearJohn)

// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10); 

// //Logical oporators
// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder)

// //Typeof operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'Mark is older than John');
// var x;
// console.log(typeof x);


/*
    Operator precedence
*/

//  var now = 2018;
//  var yearJohn = 1989;
//  var fullAge = 18;

//  //Multiple operators
//  var isFullAge = now - yearJohn >= fullAge; //true
//  console.log(isFullAge); 

//  //Grouping
//  var ageJohn = now - yearJohn;
//  var ageMark = 35;
//  var average = (ageJohn + ageMark) / 2;
//  console.log(average); 


//  //Multiple assignments
//  var x, y; 
//  x = y = (3 + 5) * 4 - 6; //8 * 4 - 6 //32 - 6 // 26 
// console.log(x, y); 

// //More operatores
// //x = x * 2; == x *= 2;
// x *= 2;
// console.log(x); 
// x += 10; 
// console.log(x);
// x--
// console.log(x);



//Code Challange 

    // var johnWeight = 99; //kg
    // var johnHight = 1.5; //meters

    // var markWeight = 79;
    // var markHight = 1.8;

    // var johnBMI = johnWeight / (johnHight * johnHight);
    // var markBMI = markWeight / (markHight * markHight);
    // console.log(johnBMI, markBMI)

    // var johnBMI = 44;
    // var markBMI = 24.4;

    // var markHigherBMI = markBMI > johnBMI;
    // console.log('Is Marks\'s BMK hight than Jons\'? ' + markHigherBMI);



/*
    Variables and data types
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


/*
    Variables mutation and type coercion 
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


/*
    If / else statements
 */

    // var firstName = 'John';
    // var civilStatus = 'single';

    // if (civilStatus === 'married') {
    //     console.log(firstName + ' is married!');
    // } else {
    //     console.log(firstName + ' will hopefully marry soon :)');
    // }

    // var isMarried = true 
    // if (isMarried) {
    //     console.log(firstName + ' is married!');
    // } else {
    //     console.log(firstName + ' will hopefully marry soon :)');
    // }


    // var johnMass = 99; //kg
    // var johnHight = 1.5; //meters

    // var markMass = 79;
    // var markHight = 1.8;

    // var johnBMI = johnMass / (johnHight * johnHight);
    // var markBMI = markMass / (markHight * markHight);

    // if (markBMI > johnBMI) {
    //     console.log('Mark\'s BMI is hight than John\'s')
    // } else { 
    //     console.log('John\'s BMI is hight than Mark\'s')
    // }


/*
    Boolean logic
*/

    // var firstName = 'John';
    // var age = '26';

    // if (age < 13) {
    //     console.log(firstName + ' is a boy.');
    // } else if (age >= 13 && age  < 20 ) { //between 13 and 20 >= 13 AND (&&) < 20
    //     console.log(firstName + ' is a teenager.');
    // } else if(age >= 20 && age < 30) {
    //     console.log(firstName + ' is a young man.');
    // } else { 
    //     console.log(firstName + ' is a man.');
    // }

/*
    The Ternary Operator and Switch Statements
*/

//ternary operator
    //var firstName = "John";
    // var age = 16;

    // age >= 18 ? console.log(firstName + ' drinks beer.') 
    // : console.log(firstName + ' drinks juice.');

    // var drink = age >= 18 ? 'beer' : 'juice';
    // console.log(drink);
 
/*if (age >=18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}*/


//switch statement
    var firstName = 'Evan'
    var job = 'qa';
    switch(job) {
        case 'teacher':
        case 'instructor':
            console.log(firstName + ' teaches kids how to code.');
            break;
        case 'driver':
            console.log(firstName + ' drives an Uber in Lisbon.');
            break;
        case 'designer':
            console.log(firstName + ' designs beautiful websites.')
            break;
        case 'qa':
            console.log(firstName + ' does QA for Canvass.com.')
            break;
        default:
            console.log(firstName + ' does something else.');
    }

    var age = 26
    switch (true) {
        case age < 13:
            console.log(firstName + ' is a boy.');
            break;
        case age >= 13 && age < 20:
            console.log(firstName + ' is a teenager.');
            break;
        case age >= 20 && age < 30:
            console.log(firstName + ' is a young man.');
            break;
        default:
            console.log(firstName + ' is a man.');
    }



// var car = 'Mazda'
// var Mazda = 'red'

// if (car == "Mazda") {
//     console.log(car + ' goes outside.');
// } else { 
//     console.log(car + ' goes inside gradge.')
// } 



