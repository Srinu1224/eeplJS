
const True = true
const False = false

// if (False || True) { // OR Operator, takes two operands, results True if anyone of them is true.
//     console.log("There is a True value");
// }

// else {
//     console.log("Both values are False.");
// }

// if (True && True && False) { // AND Operator, takes two operands, results False if anyone of them are False.
//     console.log("There are No False Values");
// }

// else {
//     console.log("There is a False value.");
// }

let x = 15
let y = 50
let z = 201
let a = 10
/*if(x > y && x > z && x > a)
{
    console.log("x is greater");
}
else if(y > x && y > z && y > a)
{
    console.log("y is greater");
}
else if(z > x && z > y && z > a){
    console.log(" z is greater.");
}
else{
    console.log(" a is greater");
}*/

/*if (x > y) {
    if (x > z) {
        if(x > a){
        console.log("x is greater ");
        }
    }
}

if (y > x) {
    if (y > z) {
        if(y > a){
        console.log(" y is greater ");
        }
    }
    // console.log(" y is greater than x");
}

if (z > x) {
    if (z > y) {
        if(z > a){
        console.log("z is greater .");
        }
    }
    //console.log(" z is greater than x");
}
if (a > x) {
    if (a > y) {
        if(a > z){
        console.log("a is greater .");
        }
    }
    //console.log(" z is greater than x");
}*/

// if (x > y) {
//     if (x > z) {
//         console.log("X is Greater");
//     }
//     else {
//         console.log("Z is greater");
//     }
// }
// else if (y > z) {
//     console.log("Y is Greater");
// }

// else {
//     console.log("Z is greater");
// }


//====================================================================================

if (x > y) {
    if (x > z) {
        console.log("X is greater");
    }
    else {
        console.log("Z is greater 1");
    }
}
else if (y > z) {
    console.log("Y is greater");
}
else {
    console.log("Z is Greater");
}