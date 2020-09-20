//STRINGS

//String literals
// let myNumber = 2
// const myString = `First line
// Second line
// This is my value ${myNumber}`
// console.log(myString);

// const myString = 'whatever'
// myString.slice(3,6)
// myString.indexOf('a')
// myString.trim()//removes white spaces

// const sentence = "Hello strivers we are trying the split method"
// const splitWords = sentence.split(" ")// chose to split the sentence using the space as a separator
// console.log(splitWords)
// console.log(splitWords.join(", "))//join split words with a comma

// console.log("asd".repeat(5))//repeats string 5 times

// console.log(Math.PI)//library for mathematics functions if you type 'Math'

// let randomNum = Math.random() //creates a random number
// console.log(randomNum)

// FUNCTIONS

// let number = 4

// //function definition
// const squareFunction = function(num){
//     //function body = my function's code
//     const square = num * num //create the square of the number
//     return square 
// }

// //Function execution = calling the name of the function using () and parsing a parameter to the function
// const resultOfSquareOfTwo = squareFunction(2) //when function is executed, num is replaced by 2
// const resultOfSquareOfFour = squareFunction(4)
// const resultOfSquareOfSix = squareFunction(6)
// const resultOfSquareOfFiveHundred = squareFunction(500)

// console.log("2 * 2: ", resultOfSquareOfTwo)
// console.log("4 * 4: ", resultOfSquareOfFour)
// console.log("6 * 6: ", resultOfSquareOfSix)
// console.log("500 * 500: ", resultOfSquareOfFiveHundred)

//Define a function with 0 parameters
const makeNoise = function(){
    console.log('Bark')
}
makeNoise()

//with parameters
const makeNoiseWithParameter = function(noise){
    console.log(noise)
}
makeNoiseWithParameter("Meow")

//function with many parameters
const sum = function(a, b){
    return a + b
}
console.log(sum(1,2))