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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
    // var firstName = 'Evan'
    // var job = 'qa';
    // switch(job) {
    //     case 'teacher':
    //     case 'instructor':
    //         console.log(firstName + ' teaches kids how to code.');
    //         break;
    //     case 'driver':
    //         console.log(firstName + ' drives an Uber in Lisbon.');
    //         break;
    //     case 'designer':
    //         console.log(firstName + ' designs beautiful websites.')
    //         break;
    //     case 'qa':
    //         console.log(firstName + ' does QA for Canvass.com.')
    //         break;
    //     default:
    //         console.log(firstName + ' does something else.');
    // }

    // var age = 26
    // switch (true) {
    //     case age < 13:
    //         console.log(firstName + ' is a boy.');
    //         break;
    //     case age >= 13 && age < 20:
    //         console.log(firstName + ' is a teenager.');
    //         break;
    //     case age >= 20 && age < 30:
    //         console.log(firstName + ' is a young man.');
    //         break;
    //     default:
    //         console.log(firstName + ' is a man.');
    // }



// var car = 'Mazda'
// var Mazda = 'red'

// if (car == "Mazda") {
//     console.log(car + ' goes outside.');
// } else { 
//     console.log(car + ' goes inside gradge.')
// } 



/*
    Truthy and Falsy values and equality operatores
*/

    // falsy values: undifined, null, 0, " ", and NaN
    // truthy values: NOT falsy 

    //     var hight;

    //     hight = 23;

    //     if (hight || hight === 0) {
    //         console.log('Variable is defined');
    //     } else {
    //         console.log('Variable has NOT been defined')
    //     }

    // // Equality operators
    //     if (hight === '23') {
    //         console.log('The == operator does type corecion!');
    //     }



/*
    Coding Challange 2
*/

        // var johnsGame1 = 24;
        // var johnsGame2 = 12;
        // var johnsGame3 = 96;

        // var mikesGame1 = 11;
        // var mikesGame2 = 50;
        // var mikesGame3 = 140;

        // console.log('Total of all three games for Johns team is ' + (johnsGame1 + johnsGame2 + johnsGame3))
        // console.log('Total of all three games for Mikes team is ' + (mikesGame1 + mikesGame2 + mikesGame3))

        // var johnTotal = 132
        // var mikeTotal = 201

        // console.log(johnTotal / 3 + ' is the avrage score')
        // console.log(mikeTotal / 3 + ' is the avrage score. Mike has the highest average score.')


    //Solution 
        // var scoreJohn = (89 + 120 + 103) / 3;
        // var scoreMike = (116 + 94 + 123) / 3; 
        // var scoreMary = (97 + 134 + 105) / 3;
        // console.log(scoreJohn, scoreMike, scoreMary);

        // if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
        //     console.log('John\'s team wins with ' + scoreJohn + ' points.');
        // } else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
        //     console.log('Mike\'s team wins with ' + scoreMike + ' points.');
        // } else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
        //     console.log('Mary\'s team wins with ' + scoreMary + ' points.');
        // } else {
        //     console.log('There is a draw.');
        // }


        /*if (scoreJohn > scoreMike) {
            console.log('John\'s team wins with ' + scoreJohn + ' points.');
        } else if (scoreMike > scoreJohn) {
            console.log('Mike\'s team wins with ' + scoreMike + ' points.');
        } else {
            console.log('There is a draw');
        }*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 
    Functions
*/

    // function calculateAge(birthYear){
    //     return 2018 - birthYear;
    // }

    // var ageJoe = calculateAge(1990);
    // var ageMike = calculateAge(1948);
    // var ageJane = calculateAge(1969);
    // console.log(ageJoe, ageMike, ageJane)


    // function yearsUntilRetierment(year, firstname) {
    //     var age = calculateAge(year);
    //     var retirement = 65 - age;

    //     if (retirement > 0){
    //     console.log(firstname + ' retires in ' + retirement + ' years.');
    //     } else {
    //         console.log(firstname + ' is already retired.')
    //     }
    // }

    // yearsUntilRetierment(1990, 'Joe')
    // yearsUntilRetierment(1948, 'Mike')
    // yearsUntilRetierment(1969, 'Jane')


/*
    Function Statements and Expressions
*/
    //Function declaration
        //function whatDoYouDo(job, firstName){}

    //Functioin expresstoin     
        // var whatDoYouDo = function(job, firstName) {
        //     switch(job) { 
        //         case 'teacher':
        //             return firstName + ' teaches kids how to code.';
        //         case 'driver':
        //             return firstName + ' drives an Uber.';
        //         case 'designer':
        //             return firstName + ' designes awesome iOS apps.';
        //         default:
        //             return firstName + ' does something else.';
        //     }
        // }

        // console.log(whatDoYouDo('teacher', 'John'))
        // console.log(whatDoYouDo('designer', 'Jane'))
        // console.log(whatDoYouDo('retired', 'Mark'))


/*
    Arrys
*/
        // initialize new array
            var names = ['John', 'Mark', 'Jane'];
            var years = new Array(1990, 1969, 1948);

            console.log(names[2]);
            console.log(names.length);

        // mutate array data
            names[1] = 'Ben';
            names[names.length] = 'Mary';
            console.log(names);

        // different data types
            var john = ['John', 'Smith', 1990, 'teacher', 'false'];

            john.push('blue');
            
            console.log(john);
        









