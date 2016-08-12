// madLib

// Write a function that takes three strings - a verb,
//  an adjective, and a noun - and interpolates them into
//   the sentence "We shall verb the adjective noun" 
//   using ES6 template literals.


function madLib(x, y, z){
  console.log("we shall ", x, " the ", y, " ", z);
}

madLib("fly", "purple", "moon");




// isOdd

// Input: A Number.

// Output: A Boolean. true if the number is odd, otherwise false


function isOdd(num) {
  if (num % 2 === 0) {
    console.log(false);
 } else {
    console.log(true);
  }
}

isOdd(2);
isOdd(8);
isOdd(5);

isOdd(-17);




// yell

// Input: A String. Assume no punctuation.

// Output: A String. A yelled version of the input.

// > yell("I want to go to the store")
// "I WANT TO GO TO THE STORE!!!"

function yell(str) {
  return str.toUpperCase();
}


yell("I want to go to the store");


// fizzBuzz

// 3 and 5 are magic numbers. Define a function fizzBuzz(array)
//  that takes an array returns a new array of every number in the array
//  that is divisible by either 3 or 5, but not both.


function fizzBuzz(num_arr){
  var fizz_arr = [];
  for (var i = 0; i < num_arr.length; i ++) {

    if (num_arr[i] % 5 === 0 && num_arr[i] % 3 === 0){
      continue;
    } else if (num_arr[i] % 3 === 0) {
      fizz_arr.push(num_arr[i]);
    } else if (num_arr[i] % 5 === 0) {
      fizz_arr.push(num_arr[i]);
    }
  }
  console.log(fizz_arr);
}

fizzBuzz([2, 3, 4, 5, 6, 15, 20, 21]);


// isPrime

// Define a function isPrime(number) that returns true if number is prime.
//  Otherwise, false. Assume number is a positive integer.


function isPrime(num) {
  var counter = num - 1;
  while (counter > 1 && num % counter !== 0) {
    counter -= 1;
  }
  if (counter === 1) {
    return true;
  } else {
    return false;
  }
}

isPrime(2);
isPrime(4);
isPrime(11);
isPrime(84);
















