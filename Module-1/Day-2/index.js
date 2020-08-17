//Arrays

let listOfNumbers = [1, 2, 3, 4, 5, 6, 990312, 12123123];
console.log(listOfNumbers);
console.log(listOfNumbers[0]); //indexes start from zero (not one!!!)
console.log(listOfNumbers[7]);
console.log(listOfNumbers[8]); // we do not have index number 8

console.log("The length of the array is:", listOfNumbers.length); // length === how many elements does the array have, maximum index is length - 1

const listOfObjects = [{x: 0}, 2, "asd"]; //mixed array of object
console.log(listOfObjects);

/* Matrix === bidimensional array
[
    [1 2 3],
    [4 5 6],
    [7 8 9],
    2
]