//Arrays

// let listOfNumbers = [1, 2, 3, 4, 5, 6, 990312, 12123123];
// console.log(listOfNumbers);
// console.log(listOfNumbers[0]); //indexes start from zero (not one!!!)
// console.log(listOfNumbers[7]);
// console.log(listOfNumbers[8]); // we do not have index number 8

// console.log("The length of the array is:", listOfNumbers.length); // length === how many elements does the array have, maximum index is length - 1

// const listOfObjects = [{x: 0}, 2, "asd"]; //mixed array of object
// console.log(listOfObjects);

/* Matrix === bidimensional array
[
    [1 2 3],
    [4 5 6],
    [7 8 9],
    2
] */

//Loops

/* for(initial expression; condition; increment) {
    code to be repeated
}*/

// const array = [2, 31, 123, 43242] //array.length === 4

// // for (let index = 0; index < array.length; index++) {
// //     console.log("index: ", index);
// //     console.log("element:", array[index]);
// // }

// for(let entry of array){
//     console.log("element:", entry)
// }

// While loop

let number = 0

while(number <= 12){
    console.log(number);
    number = number + 1;
}

let condition = true;

while(condition){
    
    condition = false;
    console.log(condition);
}
// Do while loop

do {
    //this code gets executed at least once 
} while (condition);